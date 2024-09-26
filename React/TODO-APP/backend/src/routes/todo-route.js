const express = require("express");
const { getTodos, addTodo, updateTodo, deleteTodo } = require("../controllers");
const { validateTask } = require("../validations");
const router = express.Router();

router.get("/get", getTodos);

router.post("/add", validateTask, addTodo);

router.put("/update/:todoId", updateTodo);

router.delete("/delete/:todoId", deleteTodo);

module.exports = router;
