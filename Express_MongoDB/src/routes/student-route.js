const express = require("express");
const { addStudent, getStudent } = require("../controllers/student-controller");
const router = express.Router();

router.post("/add", addStudent);

router.get("/get", getStudent);

module.exports = router;
