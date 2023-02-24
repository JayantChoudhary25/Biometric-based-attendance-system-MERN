const mongoose = require("mongoose");

const AttendenceSchema = new mongoose.Schema({
student_id: {
    type: String,
  },
  present: {
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
  created_at: {
    type: Date
  },
  updated_at: {
    type: Date
  }
});

const Attendence = mongoose.model("Attendence", AttendenceSchema);

module.exports = Attendence;
