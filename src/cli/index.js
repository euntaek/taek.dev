const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const matter = require("gray-matter");
const inquirer = require("inquirer");
const chalk = require("chalk");
const format = require("date-fns/format");

const cwd = process.cwd();
const dateFormat = "yyyy-MM-dd";
const postsPath = path.join(cwd, "content", "blog");
const readdir = promisify(fs.readdir);
const mkdir = promisify(fs.mkdir);
const exist = promisify(fs.exists);
const writeFile = promisify(fs.writeFile);

inquirer.registerPrompt("autocomplete", require("inquirer-autocomplete-prompt"));

async function getCategoies() {
  return (await readdir(postsPath)).filter(item => item[0] !== ".");
}
async function getTags(categories) {
  const tags = new Map();
  for (const category of categories) {
    const temp = [];
    const categoryPath = postsPath + path.sep + category;
    (await readdir(categoryPath)).forEach(mdDir => {
      const mdPath = categoryPath + path.sep + mdDir + path.sep + "index.md";
      temp.push(...matter.read(mdPath).data.tags);
    });
    tags.set(category, [...new Set([...temp])]);
  }

  return tags;
}
async function setTitle() {
  let { title } = await inquirer.prompt({
    name: "title",
    message: "포스트 제목을 입력해주세요.",
    validate: value => {
      return new Promise(res => {
        if (value.length <= 0) {
          return res("한글자 이상 입력해주세요.");
        }
        return res(true);
      });
    },
  });
  return title;
}
async function setCategory(categories) {
  let answer = await inquirer.prompt({
    type: "rawlist",
    name: "category",
    message: "카테고리를 선택하세요.",
    choices: [
      ...categories,
      new inquirer.Separator(),
      { name: "새로운 카테고리 생성", value: -1 },
    ],
  });

  if (answer.category === -1) {
    answer = await inquirer.prompt({
      name: "category",
      message: "생성할 카테고리 이름을 입력해주세요. \n",
      validate: value => {
        return new Promise(res => {
          if (value.length < 1) {
            return res("카테고리 이름은 한 글자 이상이어야 합니다.");
          }
          if (categories.includes(value)) {
            return res("동일한 카테고리가 존재합니다.");
          }
          return res(true);
        });
      },
    });
  }
  console.log("\n");
  return answer.category;
}
async function setTags(tags, selectedCategory, selectedTags = []) {
  const temp = tags.has(selectedCategory)
    ? tags.get(selectedCategory).filter(tag => !selectedTags.includes(tag))
    : [];

  const done = { name: chalk.bold.green("태그 선택 완료"), value: null };
  const message = `태그를 선택 및 검색\n${chalk.red(
    "* 다른 카테고리의 태그와 중복 불가 *",
  )}\n${
    selectedTags ? "→ 선택 된 태그: " + chalk.blue(selectedTags.join(" ") + "\n") : ""
  }${chalk.green(":")}`;

  const searchTags = (_, input) => {
    const trimInput = input && input.trim();
    const returnVal = result => {
      let dplicate = null;
      for (const tag of tags) {
        const [k, v] = tag;
        if (k === selectedCategory) continue;
        if (v.includes(trimInput)) {
          dplicate = {
            name: chalk.bold.red(`${k} 카테고리의 중복 된 태그가 있습니다.`),
            value: -1,
          };
          break;
        }
      }
      if (result.includes(trimInput)) return result;
      if (dplicate) return [dplicate];
      return [
        ...result,
        { name: chalk.bold.green(`"${trimInput}" 태그 생성`), value: trimInput },
      ];
    };
    return new Promise(res => {
      if (!trimInput) return res([done, ...temp]);
      const result = temp.filter(tag => new RegExp(`^${trimInput}`).test(tag));
      return res(returnVal(result));
    });
  };
  const answer = await inquirer.prompt({
    type: "autocomplete",
    name: "tags",
    pageSize: 9,
    message,
    source: searchTags,
  });

  if (answer.tags) {
    return setTags(tags, selectedCategory, [...selectedTags, answer.tags]);
  }
  if (selectedTags.includes(null) || !selectedTags.length) {
    return setTags(tags, selectedCategory);
  }
  return selectedTags;
}
async function setDescription() {
  let { description } = await inquirer.prompt({
    name: "description",
    message: "description을 입력해주세요.",
    validate: value => {
      return new Promise(res => {
        if (value.length <= 0) {
          return res("한글자 이상 입력해주세요.");
        }
        return res(true);
      });
    },
  });
  console.log("\n");
  return description;
}
async function confirm(matters) {
  const message = `${chalk.bold.blue("포스트 정보")}\n${chalk.bold(
    matters,
  )}${chalk.bold.green("포스트를 생성하시겠습니까?")}`;
  const { confirm } = await inquirer.prompt({
    type: "confirm",
    name: "confirm",
    message,
  });
  return confirm;
}
function createMatters(matters) {
  return matter
    .stringify("", matters)
    .split("'")
    .join("");
}
async function createPost(category, title, date, matters) {
  const dirName = `${date} ${title}`.replace(/ /gi, "-");
  const dirPath = postsPath + path.sep + category + path.sep + dirName;
  const postPath = dirPath + path.sep + "index.md";
  const test = await exist(dirPath);
  if (!test) {
    try {
      await mkdir(dirPath, { recursive: true });
      await writeFile(postPath, matters);
      console.log(chalk.bold.green("포스트 생성 완료"));
      console.log(chalk.blue(postPath));
    } catch (e) {
      console.error(chalk.bold.red("포스트 생성 실패"));
      console.error(e);
    }
  } else {
    console.error(chalk.bold.red("포스트가 존재합니다."));
  }
}
async function startCli(categories, tagList) {
  const date = format(new Date(), dateFormat);
  const title = await setTitle();
  const category = await setCategory(categories);
  const tags = await setTags(tagList, category);
  const description = await setDescription();
  const matters = createMatters({ title, date, category, tags, description });
  const confirmed = await confirm(matters);

  if (confirmed) {
    await createPost(category, title, date, matters);
  }
}

module.exports = (async () => {
  const categories = await getCategoies();
  const tagList = await getTags(categories);
  await startCli(categories, tagList);
})();
