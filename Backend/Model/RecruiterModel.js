const mongoose = require("mongoose");

const recruiter = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  // img: {
  //   data: Buffer,
  //   contentType: String,
  // },
  password: {
    type: String,
    required: true,
  },
  confirmpassword: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("recruiter", recruiter);
