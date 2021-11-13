const os = require("os");
const { nextTick } = require("process");
const process = require("process");

console.log(os.EOL === "\n");
console.log(os.EOL === "\r\n");
console.log(process.cpuUsage());

setTimeout(() => console.log("setTimeout"), 0);
nextTick(() =>
  console.log("nextTick...task queue에 다른게 있어도 최우선으로 수행")
);

for (let i = 0; i < 10; i++) {
  console.log("for");
}
