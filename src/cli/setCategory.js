async function setCategory(inquirer, categories) {
  const setCategoryFn = () =>
    inquirer.prompt({
      type: "rawlist",
      name: "category",
      message: "카테고리를 선택하세요.",
      choices: [
        ...categories,
        new inquirer.Separator(),
        { name: "새로운 카테고리 생성", value: -1 },
      ],
    });
  let answer = await setCategoryFn();

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

module.exports = setCategory;
