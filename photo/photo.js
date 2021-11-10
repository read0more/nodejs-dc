const fs = require("fs");
var path = require("path");
const args = process.argv.slice(2);
const targetDir = path.join(__dirname, args[0]);
const VIDEO_DIR = path.join(targetDir, "video");
const CAPTURED_DIR = path.join(targetDir, "captured");
const DUPLICATED_DIR = path.join(targetDir, "duplicated");

fs.readdir(targetDir, (err, files) => {
  files.forEach((file) => {
    isVideo(file) &&
      move(path.join(targetDir, file), path.join(VIDEO_DIR, file));

    isCaptured(path.join(targetDir, file)) &&
      move(path.join(targetDir, file), path.join(CAPTURED_DIR, file));

    isDuplicated(file) &&
      move(path.join(targetDir, file), path.join(DUPLICATED_DIR, file));
  });
});

function isVideo(file) {
  console.log(path.extname(file));
  return [".mp4", ".mov"].includes(path.extname(file));
}

function isCaptured(file) {
  return [".png", ".aae"].includes(path.extname(file));
}

function isDuplicated(file) {
  return /^IMG_E/.test(file);
}

function mkrir(path) {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }
}

function move(oldPath, newPath) {
  mkrir(path.dirname(newPath));
  fs.rename(oldPath, newPath, function (error) {
    if (error) throw error;
  });
}
