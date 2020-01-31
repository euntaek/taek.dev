const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const matter = require("gray-matter");
const inquirer = require("inquirer");
const chalk = require("chalk");

const readdir = promisify(fs.readdir);
const postsPath = path.join(__dirname, "..", "..", "content", "blog");

async function getCategoies() {
  const categories = await (await readdir(postsPath)).filter(item => item[0] !== ".");
  let { category } = await inquirer.prompt({
    type: "list",
    name: "category",
    message: "카테고리를 선택하세요.",
    choices: [
      ...categories.map((item, i) => ({ name: `${i}. ${item}`, value: item })),
      { name: "새로운 카테고리 생성", value: -1 },
    ],
  });
  console.log(category);
  if(category === -1) {
     category  = await inquirer.prompt({
      name: "생성할 카테고리 이름을 입력해주세요.",
      validate: 
    })
  }
  return 1;
}
async function getTags(categories) {
  const tags = [];
  for (const category of categories) {
    const categoryPath = postsPath + path.sep + category;
    (await readdir(categoryPath)).forEach(mdDir => {
      const mdPath = categoryPath + path.sep + mdDir + path.sep + "index.md";
      tags.push(...matter.read(mdPath).data.tags);
    });
  }
  return [...new Set(tags)];
}

async function test() {
  const categories = await getCategoies();
  // const tags = await getTags(categories);
  console.log(categories);
  // console.log(tags);
}

test();
