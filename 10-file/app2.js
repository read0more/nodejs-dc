const fs = require("fs").promises;

fs.readFile("./test.txt", "utf8").then(console.log).catch(console.error);
fs.writeFile("./file.txt", "write from fs.writeFile") // prettier 때문에 추가한 주석
  .catch(console.error);
fs.appendFile("./file.txt", "\nappend") //
  .then(() => {
    fs.copyFile("./file.txt", "./copy_file.txt") //
      .catch(console.error);
  })
  .catch(console.error);
