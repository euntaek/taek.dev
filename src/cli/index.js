const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function answerCallback(answer) {
  switch (answer) {
    case "y":
      console.log("thank you!");
      rl.close();
      break;
    case "n":
      console.log("sorry!");
      rl.close();
      break;
    default:
      console.log("잘못 입력했어요");
      rl.question("예제가 재밌습니까?", answerCallback);
  }
}

rl.question("예제가 재밌습니까?", answerCallback);
