const express = require("express");
const app = express();
const port = 3000;

app.get("", (req, res) => {
  res.send("Welcome to express");
});

app.get("/home", (req, res) => {
  res.send("Welcome to Home");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
