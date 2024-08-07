const mongoose = require("mongoose");

const studentScheme = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  skills: { type: Array, required: true },
  location: { type: String, required: false },
});

const myDB = mongoose.connection.useDb("OA_STUDENTS");

const StudentModel = myDB.model("student", studentScheme);

module.exports = { StudentModel };
