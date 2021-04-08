const fs = require("fs");
const { promisify } = require("util");

const readdir = promisify(fs.readdir);

async function getCategoies(postsPath) {
  return (await readdir(postsPath)).filter(item => item[0] !== ".");
}

module.exports = getCategoies;
