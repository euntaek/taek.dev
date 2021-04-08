async function setDescription(inquirer) {
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

module.exports = setDescription;
