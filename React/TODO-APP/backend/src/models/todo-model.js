const mongoose = require("mongoose");

// Define the schema for the Todo model
const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      minlength: [3, "Title must be at least 3 characters long"],
      maxlength: [100, "Title cannot exceed 100 characters"],
    },
    description: {
      type: String,
      maxlength: [500, "Description cannot exceed 500 characters"],
    },
    status: {
      type: String,
      enum: ["pending", "in-progress", "completed"],
      default: "pending",
    },
    dueDate: {
      type: Date,
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      required: [true, "Priority is required"],
    },
  },
  { timestamps: true }
); // Automatically adds createdAt and updatedAt fields

// Create the Todo model from the schema
const TodoModel = mongoose.model("Todo", todoSchema);

module.exports = TodoModel;
