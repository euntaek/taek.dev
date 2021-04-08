const chalk = require("chalk");

async function setTags(inquirer, tags, selectedCategory, selectedTags = []) {
  console.log("tags!!!!!!!!!!", tags, selectedCategory, selectedTags);
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
    return setTags(inquirer, tags, selectedCategory, [...selectedTags, answer.tags]);
  }
  if (selectedTags.includes(null) || !selectedTags.length) {
    return setTags(inquirer, tags, selectedCategory);
  }
  return selectedTags;
}

module.exports = setTags;
