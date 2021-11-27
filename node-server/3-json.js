const http = require("http");
const fs = require("fs");

const courses = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JS" },
  { name: "NODE" },
];

const server = http.createServer((req, res) => {
  console.log("Start");

  const { url, method } = req;

  if (url === "/courses") {
    if (method === "GET") {
      res
        .writeHead(200, { "Content-Type": "application/json" })
        .end(JSON.stringify(courses));
    } else if (method === "POST") {
      const body = [];

      req.on("data", (chunk) => {
        console.log(chunk);
        body.push(chunk);
      });

      req.on("end", () => {
        const course = JSON.parse(Buffer.concat(body).toString());
        console.log(course);
        courses.push(course);
        res.writeHead(201).end();
      });
    }
  }
});

server.listen(8080);
