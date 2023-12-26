require("dotenv").config();
const express = require("express");
const app = express();

const port = 8888;

app.get("/", (req, res) => {
  "It's Working";
});

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});
