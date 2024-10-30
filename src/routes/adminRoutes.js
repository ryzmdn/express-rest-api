const express = require("express");
const User = require("../models/User");
const auth = require("../middleware/auth");
const adminAuth = require("../middleware/admin");

const router = express.Router();

router.get("/users", auth, adminAuth, async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
