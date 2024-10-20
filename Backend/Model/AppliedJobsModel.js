const mongoose = require("mongoose");

const appliedjob = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  skills: {
    type: String,
    required: true,
  },
  exp: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
  applicantID: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("appliedjob", appliedjob);
