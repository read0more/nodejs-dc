const path = require("path");

console.log(__dirname);
console.log(__filename);

console.log(path.sep);
console.log(path.delimiter); // 환경변수 구분자

console.log(path.basename(__filename));
console.log(path.basename(__filename, ".js"));

console.log(path.dirname(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename));

console.log("is absolute?", path.isAbsolute(__filename));
console.log("is absolute?", path.isAbsolute(".."));

console.log(path.normalize("./folder///"));
console.log("is absolute?", path.join(__dirname, "image"));
