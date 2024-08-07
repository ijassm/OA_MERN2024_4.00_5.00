const { StudentModel } = require("../models/student-model");

const addStudent = async (req, res) => {
  try {
    const student = await StudentModel(req.body);

    await student.save();

    res
      .status(201)
      .json({ status: "success", message: "Student added successfully" });
  } catch (error) {
    res.status(400).json({ status: "error", message: error.message });
  }
};

const getStudent = async (req, res) => {
  try {
    const students = await StudentModel.find();

    res.status(201).json({
      status: "success",
      message: "Student added successfully",
      data: students,
    });
  } catch (error) {
    res.status(400).json({ status: "error", message: error.message });
  }
};

module.exports = { addStudent, getStudent };
