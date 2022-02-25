const express = require("express");
const helmet = require("helmet");

const app = express();

app.get("/", (req, res, next) => {
  res.send(`
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <b>second iframe(예: 페월)</b>
    <iframe      
      title="Inline Frame Example"
      width="100"
      height="100"
      src="https://0bbf-59-16-217-239.ngrok.io"      
    >
    </iframe>
    <script>
    console.log('first');
    window.addEventListener("message", (event) => {
        console.log(event);
        window.parent.postMessage(event.data, '*');
      });
    </script>
  </body>
</html>
`);
});

app.listen(8080);
