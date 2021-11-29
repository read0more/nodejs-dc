const http = require("http");
const fs = require("fs");
const ejs = require("ejs");

const name = "yk";
const courses = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JS" },
  { name: "NODE" },
];
const server = http.createServer((req, res) => {
  console.log("Start");

  const url = req.url;
  res.setHeader("Content-Type", "text/html; charset=UTF-8");
  if (url === "/") {
    ejs
      .renderFile("./template/index.ejs", { name })
      .then((data) => res.end(data));
  } else if (url === "/courses") {
    ejs
      .renderFile("./template/courses.ejs", { courses })
      .then((data) => res.end(data));
  } else {
    ejs
      .renderFile("./template/notFound.ejs", { name })
      .then((data) => res.end(data));
  }
});

server.listen(8080);
