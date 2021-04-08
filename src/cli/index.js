const path = require("path");
const matter = require("gray-matter");
const inquirer = require("inquirer");
const format = require("date-fns/format");

const getCategories = require("./getCategories");
const getTags = require("./getTags");
const setSlug = require("./setSlug");
const setTitle = require("./setTitle");
const setCategory = require("./setCategory");
const setTags = require("./setTags");
const setDescription = require("./setDescription");
const isConfirm = require("./isConfirm");
const createPost = require("./createPost");

const cwd = process.cwd();
const dateFormat = "yyyy-MM-dd";
const postsPath = path.join(cwd, "content", "blog");

inquirer.registerPrompt("autocomplete", require("inquirer-autocomplete-prompt"));

function createMatters(matters) {
  return matter
    .stringify("", matters)
    .split("'")
    .join("");
}

async function runCli(inquirer, categories, tagList) {
  const date = format(new Date(), dateFormat);
  const slug = await setSlug(inquirer, date);
  const title = await setTitle(inquirer);
  const category = await setCategory(inquirer, categories);
  const tags = await setTags(inquirer, tagList, category);
  const description = await setDescription(inquirer);
  const matters = createMatters({ title, date, category, tags, description });

  if (await isConfirm(inquirer, matters)) {
    await createPost(postsPath, { category, slug, matters });
  } else {
    console.log("포스트 생성을 취소하셨습니다.");
  }
}

async function bootstrap(inquirer, postsPath) {
  const categories = await getCategories(postsPath);
  const tags = await getTags(postsPath, categories);

  await runCli(inquirer, categories, tags);
}

bootstrap(inquirer, postsPath);
