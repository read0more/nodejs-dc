const express = require("express");
const helmet = require("helmet");

const app = express();
// app.use(helmet.frameguard({ action: "SAMEORIGIN" }));

app.get("/", (req, res, next) => {
  res.send(`<b style="color: orange">3000 port</b><script>
    console.log('second');
    window.parent.postMessage({yk: 'test'}, '*');
  </script>`);
});

app.listen(3000);
