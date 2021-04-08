const chalk = require("chalk");

async function isConfirm(inquirer, postInfo) {
  const message = `${chalk.bold.blue("포스트 정보")}\n${chalk.bold(
    postInfo,
  )}${chalk.bold.green("포스트를 생성하시겠습니까?")}`;
  const { confirm } = await inquirer.prompt({
    type: "confirm",
    name: "confirm",
    message,
  });
  return confirm;
}

module.exports = isConfirm;
