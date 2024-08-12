const { StudentModel } = require("../models/student-model");

const authMiddlware = async (req, res, next) => {
  const { id } = req.params;
  const student = await StudentModel.findById(id);

  if (!student) {
    console.log("middleware ended");
    return res
      .status(404)
      .send({ status: "error", message: "Student not found" });
  }

  req.id = id;
  next();
};

module.exports = { authMiddlware };
