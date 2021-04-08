const path = require("path");
const fs = require("fs");
const chalk = require("chalk");
const { promisify } = require("util");

const mkdir = promisify(fs.mkdir);
const exist = promisify(fs.exists);
const writeFile = promisify(fs.writeFile);

async function createPost(postsPath, { category, slug, matters }) {
  console.log(postsPath, category, slug, matters);
  const dirPath = postsPath + path.sep + category + path.sep + slug;
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

module.exports = createPost;
