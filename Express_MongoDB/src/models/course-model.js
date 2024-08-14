const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the schema for a Course
const courseSchema = new Schema(
  {
    courseName: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    instructor: {
      type: String,
      required: true,
      trim: true,
    },
    duration: {
      type: Number, // Duration in weeks
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

const myDB = mongoose.connection.useDb("OA_STUDENTS");

// Create the model from the schema
const Course = myDB.model("Course", courseSchema);

module.exports = Course;
