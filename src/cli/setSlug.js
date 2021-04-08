const chalk = require("chalk");

/**
 * 게시물 슬러그 설정 *https://example.com/:category/:slug
 * YYYY-MM-DD-slug로 게시물 폴더 생성
 */
async function setSlug(inquirer, date) {
  const reg = /^[a-zA-Z0-9\s]*$/;
  let { name } = await inquirer.prompt({
    name: "name",
    message: `게시물 슬러그를 설정해주세요. ${chalk.blue("* 영어 또는 숫자만 가능")}`,
    validate: value => {
      return new Promise(res => {
        if (value.length <= 0) {
          return res("한글자 이상 입력해주세요.");
        }
        if (!reg.test(value)) {
          return res("폴더 이름은 영문 또는 숫자만 가능합니다.");
        }
        return res(true);
      });
    },
  });
  const slug = `${date} ${name}`.replace(/ /gi, "-");
  return slug;
}

module.exports = setSlug;
