require("dotenv").config();
require("./src/db");
const express = require("express");
const app = express();
const port = 3000;
const studentRoutes = require("./src/routes/student-route");

app.use(express.json());

console.log(process.env.uri);

app.use("/student", studentRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
