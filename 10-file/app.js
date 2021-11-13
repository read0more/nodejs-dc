const fs = require("fs");

// rename(..., callback(error, data))
// promises.rename().then().catch();
// try { renameSync(...) } catch(e) {}

// fs.renameSync("./test.txt", "./test-rename_sync.txt");
// fs.rename("./test.txt", "./test-rename.txt", (error) =>
//   console.log(error, data)
// );
fs.promises
  .rename("./test.txt", "./test-rename.txt")
  .then(() => {
    console.log("done.");
  })
  .catch(console.error);
