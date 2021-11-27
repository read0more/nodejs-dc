const fs = require("fs");
const readStream = fs
  .createReadStream("./html/index.html")
  .on("data", (chunk) => {
    console.log(chunk.toString());
  })
  .on("end", () => {})
  .on("error", console.error);
