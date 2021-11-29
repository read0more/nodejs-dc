const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("Start");

  const url = req.url;
  res.setHeader("Content-Type", "text/html; charset=UTF-8");
  if (url === "/") {
    fs.createReadStream("./html/index.html").pipe(res);
  } else if (url === "/courses") {
    fs.createReadStream("./html/courses.html").pipe(res);
  } else {
    fs.createReadStream("./html/notFound.html").pipe(res);
  }
});

server.listen(8080);
