const logger = require("../config/logger");

const errorHandler = (err, req, res, next) => {
  logger.error(err.stack);

  if (err.name === "ValidationError") {
    return res.status(400).json({ error: err.message });
  }

  if (err.code === 11000) {
    return res.status(400).json({ error: "Duplicate value entered" });
  }

  res.status(500).json({ error: "Internal server error" });
};

module.exports = errorHandler;
