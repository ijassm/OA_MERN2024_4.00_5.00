const express = require("express");
const {
  addStudent,
  getStudent,
  getStudentById,
  getStudentByIdAndUpdate,
  deleteStudentById,
} = require("../controllers/student-controller");
const { authMiddlware } = require("../middeware/auth-middleware");
const { idCheckerMiddleware } = require("../middeware/idChecker-middleware");

const router = express.Router();

router.post("/add", addStudent);

router.get("/get", getStudent);

router.get("/get/:id", idCheckerMiddleware, authMiddlware, getStudentById);

router.patch(
  "/update/:id",
  idCheckerMiddleware,
  authMiddlware,
  getStudentByIdAndUpdate
);

router.delete(
  "/delete/:id",
  idCheckerMiddleware,
  authMiddlware,
  deleteStudentById
);

module.exports = router;
