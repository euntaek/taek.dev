// 게시물 제목 설정
async function setTitle(inquirer) {
  let { title } = await inquirer.prompt({
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
  return `"${title}"`;
}

module.exports = setTitle;
