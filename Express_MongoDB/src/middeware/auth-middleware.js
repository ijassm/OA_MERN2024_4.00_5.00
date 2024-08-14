const { StudentModel } = require("../models/student-model");
const jwt = require("jsonwebtoken");

const authMiddlware = async (req, res, next) => {
  console.log(process.env.SECRET_KEY, "process.env.SECRET_KEY");

  // Get the token from the Authorization header
  const authHeader = req.header("Authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      status: "INVALID_TOKEN",
      message: "Unauthorized: Missing or invalid token format",
    });
  }

  const token = authHeader.split(" ")[1];
  try {
    // Verify the token using your secret key
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    const student = await StudentModel.findById(decoded.id);

    if (!student) {
      return res
        .status(404)
        .send({ status: "error", message: "Student not found" });
    }

    req.id = decoded.id;
    next();
  } catch (error) {
    return res.status(401).json({
      status: "INVALID_TOKEN",
      message: "Unauthorized: Invalid token",
    });
  }
};

module.exports = { authMiddlware };
