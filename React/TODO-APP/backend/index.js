require("dotenv").config();
require("./src/databaseConnection");
const express = require("express");
const todoRoutes = require("./src/routes/todo-route");
const app = express();

// Middleware to parse JSON request bodies

app.use(express.json());

// Middleware to log request details

// app.use((req, res, next) => {
//   console.log(`${req.method} request to ${req.url}`);
//   next();
// });

// Middlware Route

app.use("/todo", todoRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the TODO server");
});

app.listen(5000, () => {
  console.log("Runing on 5000");
});
