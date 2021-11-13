const EventEmitter = require("events");
const emitter = new EventEmitter();

const callback1 = (args) => {
  console.log("first callback - ", args);
};

emitter.on("yk", callback1);

emitter.on("yk", (args) => {
  console.log("second callback - ", args);
});

emitter.emit("yk", { message: 1 });
emitter.emit("yk", { message: 2 });
emitter.removeListener("yk", callback1);
// emitter.removeAllListeners("yk");
emitter.emit("yk", { message: 3 });
