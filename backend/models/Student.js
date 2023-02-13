const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  student_name: {
    type: String,
  },
  email: {
    type: String,
  },
  computer_code: {
    type: String,
  },
  course: {
    type: String,
  },
  _class: {
    type: String,
  },
  subjects: [
    {
      type: String,
    },
  ],
});

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
