const { validationResult } = require("express-validator");
const { TaskModel } = require("../models");

const getTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.find();

    if (tasks.length === 0) {
      return res.status(200).json({
        message: "No tasks found",
        status: "success",
        data: [],
      });
    }

    res.status(200).json({
      message: "Fetched tasks successfully",
      status: "success",
      data: tasks,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Failed to create task",
      error: error.message,
    });
  }
};

const addTask = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    console.log(req.body);

    // Add the task to the database
    const task = new TaskModel(req.body);

    // // Save the task to the database
    await task.save();

    // Send a success response
    return res.status(201).json({
      status: "success",
      data: task,
    });
  } catch (error) {
    // Handle errors during database operations
    return res.status(500).json({
      status: "error",
      message: "Failed to create task",
      error: error.message,
    });
  }
};

const updateTask = async (req, res) => {
  const { taskId } = req.params;

  try {
    // Find and update the task in the database
    const updatedTask = await TaskModel.findByIdAndUpdate(taskId, req.body, {
      new: true, // Return the updated document
    });

    // If the task is not found, return a 404 error
    if (!updatedTask) {
      return res.status(404).json({
        status: "error",
        message: "Task not found",
      });
    }

    // Send a success response
    return res.status(200).json({
      status: "success",
      data: updatedTask,
      message: "Task updated successfully",
    });
  } catch (error) {
    // Handle errors during database operations
    return res.status(500).json({
      status: "error",
      message: "Failed to update task",
      error: error.message,
    });
  }
};

const deleteTask = async (req, res) => {
  const { taskId } = req.params;

  try {
    // Find and update the task in the database
    const updatedTask = await TaskModel.findByIdAndDelete(taskId);

    // If the task is not found, return a 404 error
    if (!updatedTask) {
      return res.status(404).json({
        status: "error",
        message: "Task not found",
      });
    }

    // Send a success response
    return res.status(200).json({
      status: "success",
      message: "Task deleted successfully",
    });
  } catch (error) {
    // Handle errors during database operations
    return res.status(500).json({
      status: "error",
      message: "Failed to update task",
      error: error.message,
    });
  }
};

const deleteAllTasks = async (req, res) => {
  try {
    // Find and update the task in the database
    await TaskModel.deleteMany();

    // If the task is not found, return a 404 error
    // if (!updatedTask) {
    //   return res.status(404).json({
    //     status: "error",
    //     message: "Task not found",
    //   });
    // }

    // Send a success response
    return res.status(200).json({
      status: "success",
      message: "Tasks deleted successfully",
    });
  } catch (error) {
    // Handle errors during database operations
    return res.status(500).json({
      status: "error",
      message: "Failed to update task",
      error: error.message,
    });
  }
};

module.exports = { getTasks, addTask, updateTask, deleteTask, deleteAllTasks };
