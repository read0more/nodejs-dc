import express from "express";
const app = express();

app.get(
  "/",
  (req, res, next) => {
    console.log("first handler");
    next();
  },
  (req, res, next) => {
    console.log("second handler");
    next("route");
  },
  (req, res, next) => {
    console.log("this will be skipped");
  }
);

app.get("/", (req, res, next) => {
  console.log("third handler");
  res.send("hi");
});

app.get("/user/:id", (req, res, next) => {
  console.log(req.params);
  res.send("end");
});

app.get("/error", (req, res, next) => {
  next(new Error(""));
});

// POST body 받기위해서
app.use(express.json());

app.post("/", (req, res, next) => {
  console.log(req.body);
});

// 딱 /all인경우만 해당 미들웨어 거침.
// /all/* 넣어주면 path가 뒤에 더 있어도 OK
app.all("/all", (req, res, next) => {
  console.log("all");
  next();
});

// /sky 뒤에 다른 path가 있어도 OK
app.use("/sky", (req, res, next) => {
  console.log("use");
  next();
});

app.use((req, res, next) => {
  res.status(404).send("Not available");
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send("Sorry, try later!");
});

app.listen(8080);
