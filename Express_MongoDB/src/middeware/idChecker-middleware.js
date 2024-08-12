const { default: mongoose } = require("mongoose");

const idCheckerMiddleware = async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res
      .status(400)
      .send({ status: "error", message: "Object id is invalid format" });
  }

  req.id = id;
  next();
};

module.exports = { idCheckerMiddleware };
