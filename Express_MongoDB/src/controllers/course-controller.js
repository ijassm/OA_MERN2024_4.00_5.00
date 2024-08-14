const Course = require("../models/course-model");

const addCourse = async (req, res) => {
  try {
    const course = await Course(req.body);

    await course.save();

    res
      .status(201)
      .json({ status: "success", message: "Course added successfully" });
  } catch (error) {
    res.status(400).json({ status: "error", message: error.message });
  }
};

const getCourse = async (req, res) => {
  try {
    console.log(req.id, "came from auth middleware");

    const course = await Course.find();

    if (course.length < 1) {
      return res
        .status(404)
        .json({ status: "error", message: "No courses found", data: [] });
    }

    res.status(201).json({
      status: "success",
      message: "Course added successfully",
      data: course,
    });
  } catch (error) {
    res.status(400).json({ status: "error", message: error.message });
  }
};

module.exports = { addCourse, getCourse };
