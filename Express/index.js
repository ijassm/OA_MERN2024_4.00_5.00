const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies

app.use(express.json());
app.use((req, res, next) => {
  console.log("middleware called");
  // res.send("closed");
  next();
});

app.get("", (req, res) => {
  res.send("Welcome to express");
});

app.get("/home", (req, res) => {
  res.send("Welcome to Home");
});

app.post("/student", (req, res) => {
  console.log(req.body);
  res.send("Student added successfully");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
