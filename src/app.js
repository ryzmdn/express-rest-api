const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorHandler");

require("dotenv").config();

const app = express();

connectDB();

app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/posts", require("./routes/postRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));

app.get("/health", (req, res) => {
  res.json({ status: "healthy", timestamp: new Date().toISOString() });
});

app.use(errorHandler);

module.exports = app;
