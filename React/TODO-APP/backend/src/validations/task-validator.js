const { body } = require("express-validator");

// Validation middleware
const validateTask = [
  body("title")
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ max: 255 })
    .withMessage("Title must be at most 255 characters long"),

  // body("description")
  //   .notEmpty()
  //   .withMessage("Description is required")
  //   .isLength({ max: 1000 })
  //   .withMessage("Description must be at most 1000 characters long"),

  body("status")
    .notEmpty()
    .withMessage("Status is required")
    .isIn(["pending", "in-progress", "completed"])
    .withMessage("Status must be one of: pending, in-progress, completed"),

  // body("dueDate")
  //   .notEmpty()
  //   .withMessage("Due date is required")
  //   .isISO8601()
  //   .withMessage("Due date must be a valid date format (ISO 8601)"),

  // body("priority")
  //   .notEmpty()
  //   .withMessage("Priority is required")
  //   .isIn(["low", "medium", "high"])
  //   .withMessage("Priority must be one of: low, medium, high"),
];

module.exports = { validateTask };
