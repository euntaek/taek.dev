const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const matter = require("gray-matter");
const inquirer = require("inquirer");
const chalk = require("chalk");

inquirer.registerPrompt("autocomplete", require("inquirer-autocomplete-prompt"));

const readdir = promisify(fs.readdir);
const postsPath = path.join(__dirname, "..", "..", "content", "blog");

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

async function setTitle(date) {
  let answer = await inquirer.prompt({
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
  return `[${date}] ${answer.description}`;
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
  return selectedTags;
}
async function setDescription() {
  let answer = await inquirer.prompt({
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
  return answer.description;
}

async function startCli() {
  const categories = await getCategoies();
  const tags = await getTags(categories);

  const date = new Date().toISOString();
  const title = await setTitle(date);
  const category = await setCategory(categories);
  const selectedTags = await setTags(tags, category);
  const description = await setDescription();

  console.log(title);
  console.log(category);
  console.log(selectedTags);
  console.log(description);
}

startCli();
