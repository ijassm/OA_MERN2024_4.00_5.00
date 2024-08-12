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
      message: "Retrieved student successfully",
      data: students,
    });
  } catch (error) {
    res.status(400).json({ status: "error", message: error.message });
  }
};

const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;

    const student = await StudentModel.findById(id);

    res.status(201).json({
      status: "success",
      message: "Retrieved student successfully",
      data: student,
    });
  } catch (error) {
    res.status(400).json({ status: "error", message: error.message });
  }
};

const getStudentByIdAndUpdate = async (req, res) => {
  try {
    const { id } = req.params;

    const student = await StudentModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(201).json({
      status: "success",
      message: "Student updated successfully",
      data: student,
    });
  } catch (error) {
    res.status(400).json({ status: "error", message: error.message });
  }
};

const deleteStudentById = async (req, res) => {
  try {
    const { id } = req.params;

    await StudentModel.findByIdAndDelete(id);

    res.status(201).json({
      status: "success",
      message: "Student deleted successfully",
    });
  } catch (error) {
    res.status(400).json({ status: "error", message: error.message });
  }
};

module.exports = {
  addStudent,
  getStudent,
  getStudentById,
  getStudentByIdAndUpdate,
  deleteStudentById,
};
