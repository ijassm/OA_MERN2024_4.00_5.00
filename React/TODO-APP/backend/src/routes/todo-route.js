const express = require("express");
const { getTodos, addTodo } = require("../controllers/todo-controller");
const router = express.Router();

router.get("/get", getTodos);

router.post("/add", addTodo);

module.exports = router;
