const mongoose = require("mongoose");

const interviewerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true,
    minlength: 7
  },
});

module.exports = mongoose.model("Interviewer", interviewerSchema);
