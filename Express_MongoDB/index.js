require("dotenv").config();
require("./src/db");
const express = require("express");
const app = express();
const port = 3000;
const studentRoutes = require("./src/routes/student-route");
const courseRoutes = require("./src/routes/course-route");

app.use(express.json());

// console.log(process.env.uri);

app.use("/student", studentRoutes);
app.use("/course", courseRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
