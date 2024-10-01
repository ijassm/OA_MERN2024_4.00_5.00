const mongoose = require("mongoose");

// Define the schema for the Todo model
const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      minlength: [3, "Title must be at least 3 characters long"],
      maxlength: [100, "Title cannot exceed 100 characters"],
    },
    // description: {
    //   type: String,
    //   maxlength: [500, "Description cannot exceed 500 characters"],
    // },
    status: {
      type: String,
      enum: ["pending", "in-progress", "completed"],
      default: "pending",
    },
    // dueDate: {
    //   type: Date,
    // },
    // priority: {
    //   type: String,
    //   enum: ["low", "medium", "high"],
    //   default: "low",
    // },
  },
  { timestamps: true }
); // Automatically adds createdAt and updatedAt fields

// Create the model
const myDB = mongoose.connection.useDb("TODO");

// Create the task model from the schema
const TaskModel = myDB.model("task", todoSchema);

module.exports = { TaskModel };
