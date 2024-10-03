const express = require("express");
const { validateTask } = require("../validations");
const {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
  deleteAllTasks,
} = require("../controllers");
const router = express.Router();

router.get("/get", getTasks);

router.post("/add", validateTask, addTask);

router.put("/update/:taskId", updateTask);

router.delete("/delete/:taskId", deleteTask);

router.delete("/delete", deleteAllTasks);

module.exports = router;
