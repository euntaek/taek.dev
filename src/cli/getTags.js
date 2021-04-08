const path = require("path");
const fs = require("fs");
const { promisify } = require("util");
const matter = require("gray-matter");

const readdir = promisify(fs.readdir);

async function getTags(postsPath, categories) {
  const tags = new Map();
  for (const category of categories) {
    const temp = [];
    const categoryPath = postsPath + path.sep + category;

    (await readdir(categoryPath)).forEach(mdDir => {
      if (mdDir[0] !== ".") {
        const mdPath = categoryPath + path.sep + mdDir + path.sep + "index.md";
        temp.push(...matter.read(mdPath).data.tags);
      }
    });
    tags.set(category, [...new Set([...temp])]);
  }

  return tags;
}

module.exports = getTags;
