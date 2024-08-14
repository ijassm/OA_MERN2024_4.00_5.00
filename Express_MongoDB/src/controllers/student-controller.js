const { StudentModel } = require("../models/student-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

const login = async (req, res) => {
  const { userName, password } = req.body;

  const student = await StudentModel.findOne({ userName });

  try {
    if (!student) {
      return res
        .status(404)
        .json({ status: "error", message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, student.password);

    if (!isMatch) {
      return res
        .status(401)
        .json({ status: "error", message: "Invalid credentials" });
    }

    // Generate a token
    const token = jwt.sign({ id: student.id }, process.env.SECRET_KEY);

    res.status(201).json({
      status: "success",
      message: "Student logged in successfully",
      token,
    });
  } catch (error) {
    res.status(400).json({ status: "error", message: error.message });
  }
};

const register = async (req, res) => {
  const { userName, password } = req.body;

  const student = await StudentModel.exists({ userName });

  if (student) {
    return res
      .status(409)
      .json({ status: "error", message: "Username already exists" });
  }

  // Generate a salt
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);

  // Hash the password with the salt
  const hashedPassword = await bcrypt.hash(password, salt);

  const newStudent = await StudentModel({ userName, password: hashedPassword });

  await newStudent.save();

  res
    .status(201)
    .json({ status: "success", message: "Student registered successfully" });
};

module.exports = {
  addStudent,
  getStudent,
  getStudentById,
  getStudentByIdAndUpdate,
  deleteStudentById,
  login,
  register,
};
