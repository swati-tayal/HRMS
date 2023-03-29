const mongoose = require("mongoose");

const userInterviewerSchema = mongoose.Schema({
  role: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 7
  },
});

module.exports = mongoose.model("UserInterviewer", userInterviewerSchema);
