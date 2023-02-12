const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema({
  teacher_name: {
    type: String,
  },
  phone_number: {
    type: String,
  },
  email: {
    type: String,
  },
  subject: {
    type: String,
  },
  class: {
    type: String,
  }
});

const Teacher = mongoose.model("Teacher", TeacherSchema);

module.exports = Teacher;
