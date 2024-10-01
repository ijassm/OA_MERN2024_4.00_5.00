require("dotenv").config();
require("./src/databaseConnection");
const express = require("express");
const taskRoutes = require("./src/routes/task-route");
const app = express();
var cors = require("cors");

// Middleware to parse JSON request bodies

app.use(express.json());
app.use(cors());

// Middleware to log request details

// app.use((req, res, next) => {
//   console.log(`${req.method} request to ${req.url}`);
//   next();
// });

// Middlware Route

app.use("/task", taskRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the TODO server");
});

app.listen(5000, () => {
  console.log("Runing on 5000");
});
