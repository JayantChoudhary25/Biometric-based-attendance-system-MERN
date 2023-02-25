const Student = require("../models/Student");

exports.add_student = async (req, res, next) => {
  const { student_name, computer_code, email, course, subjects, _class } =
    req.body;
  try {
    const result = await Student.create({
      student_name,
      computer_code,
      email,
      course,
      subjects,
      _class,
    });
    return res.json({ msg: "Student Created", result, status: true });
  } catch (error) {
    next(error);
  }
};

exports.get_all_student = async (req, res, next) => {
  try {
    const result = await Student.find();
    return res.json({ result });
  } catch (error) {
    next(error);
  }
};

exports.remove_student = async (req, res, next) => {
  try {
    const result = await Student.findByIdAndDelete({ _id: req.body._id });
    return res.json({
      msg: "Student removed",
      result,
      status: true,
    });
  } catch (error) {
    next(error);
  }
};

exports.update_student = async (req, res, next) => {
  const { student_name, computer_code, email, course, subjects, _class } =
    req.body;
  try {
    const result = await Student.updateMany({
      student_name,
      computer_code,
      email,
      course,
      subjects,
      _class,
      where: {
        _id: req.body._id,
      },
    });
    return res.json({ msg: "Student Updated", result, status: true });
  } catch (error) {
    next(error);
  }
};
