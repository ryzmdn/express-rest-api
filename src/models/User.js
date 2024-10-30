const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user"
  }
}, {
  timestamps: true
});

userSchema.pre("save", async function(next) {
  if (this.isModified("password")) {
    this.password = await bcryptjs.hash(this.password, 10)
  }

  next();
})

module.exports = mongoose.model("User", userSchema);
