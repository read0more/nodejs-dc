const fs = require("fs");
const zlib = require("zlib");

const readStream = fs.createReadStream("./file.txt");
const zlibStream = zlib.createGzip();
// const writeStream = fs.createWriteStream("./file-pipe.txt");
const writeStream = fs.createWriteStream("./file-pipe.zip"); // zlib.createGzip() 파이프 추가해서 압축 파일이 생성 되기때문에 zip으로 변경
const piping = readStream.pipe(zlibStream).pipe(writeStream);
piping.on("finish", () => {
  console.log("done!!");
});
