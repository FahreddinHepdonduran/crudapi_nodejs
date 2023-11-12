const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: false,
  }
});

const User = mongoose.model("Users", userSchema);

module.exports = User;
