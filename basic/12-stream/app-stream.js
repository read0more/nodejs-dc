const fs = require("fs");

const writeStream = fs
  .createWriteStream("./file-writeStream.txt")
  .on("finish", () => console.log("finished!"));

const readStream = fs
  .createReadStream("./file.txt", {
    //   highWaterMark: 200,
    //   encoding: "utf-8",
  })
  .on("data", (chunk) => {
    //   console.log(chunk);
    writeStream.write(chunk); // 테스트용. pipe 쓰면 굳이 이렇게 할 필요 없음
    console.count("read stream count");
  })
  .on("end", () => {
    writeStream.end();
  })
  .on("error", console.error);
