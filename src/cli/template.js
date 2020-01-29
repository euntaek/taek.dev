const fs = require("fs");
const path = require("path");

const type = process.argv[2];
const name = process.argv[3];
const directory = process.argv[2] || ".";

const template = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <h1>Hello</h1>
  <p>CLI</p>
</body>
</html>
`;

const routerTemplate = `
const express = require()
const router = express.Router();

router.get('/', (req, res, next) =>{
  try {
    res.send('ok');
  } catch(e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
`;

const exist = dir => {
  try {
    fs.accessSync(dir, fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK);
    return true;
  } catch (e) {
    return false;
  }
};

const mkdirp = dir => {
  const dirname = path
    .relative(".", path.normalize(dir))
    .split(path.sep)
    .filter(p => !!p);
  dirname.forEach((d, idx) => {
    const pathBuilder = dirname.slice(0, idx + 1).join(path.sep);
    if (!exist(pathBuilder)) {
      fs.mkdirSync(pathBuilder);
    }
  });
};

const makeTemplate = () => {
  mkdirp(directory);
  switch (type) {
    case "html": {
      const pathToFile = path.join(directory, `${name}.html`);
      if (exist(pathToFile)) {
        console.error("이미 파일이 존재합니다.");
      } else {
        fs.writeFileSync(pathToFile, template);
        console.log(pathToFile, "success!!");
      }
      break;
    }
    case "express-router": {
      const pathToFile = path.join(directory, `${name}.js`);
    }
  }
};
