const { validationResult } = require("express-validator");
const { TodoModel } = require("../models");

const getTodos = async (req, res) => {
  try {
    const todos = await TodoModel.find();

    if (todos.length === 0) {
      return res.status(200).json({
        message: "No todos found",
        status: "success",
        data: [],
      });
    }

    res.status(200).json({
      message: "Fetched todos successfully",
      status: "success",
      data: todos,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Failed to create todo",
      error: error.message,
    });
  }
};

const addTodo = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    // Add the todo to the database
    const todo = new TodoModel(req.body);

    // Save the todo to the database
    await todo.save();

    // Send a success response
    return res.status(201).json({
      status: "success",
      data: todo,
    });
  } catch (error) {
    // Handle errors during database operations
    return res.status(500).json({
      status: "error",
      message: "Failed to create todo",
      error: error.message,
    });
  }
};

const updateTodo = async (req, res) => {
  const { todoId } = req.params;

  try {
    // Find and update the todo in the database
    const updatedTodo = await TodoModel.findByIdAndUpdate(todoId, req.body, {
      new: true, // Return the updated document
    });

    // If the todo is not found, return a 404 error
    if (!updatedTodo) {
      return res.status(404).json({
        status: "error",
        message: "Todo not found",
      });
    }

    // Send a success response
    return res.status(200).json({
      status: "success",
      data: updatedTodo,
      message: "Todo updated successfully",
    });
  } catch (error) {
    // Handle errors during database operations
    return res.status(500).json({
      status: "error",
      message: "Failed to update todo",
      error: error.message,
    });
  }
};

const deleteTodo = async (req, res) => {
  const { todoId } = req.params;

  try {
    // Find and update the todo in the database
    const updatedTodo = await TodoModel.findByIdAndDelete(todoId, req.body);

    // If the todo is not found, return a 404 error
    if (!updatedTodo) {
      return res.status(404).json({
        status: "error",
        message: "Todo not found",
      });
    }

    // Send a success response
    return res.status(200).json({
      status: "success",
      message: "Todo deleted successfully",
    });
  } catch (error) {
    // Handle errors during database operations
    return res.status(500).json({
      status: "error",
      message: "Failed to update todo",
      error: error.message,
    });
  }
};

module.exports = { getTodos, addTodo, updateTodo, deleteTodo };
