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
exports.get_student_byID = async (req, res, next) => {
  try {
    const email = req.body.email;
    const result = await Student.findOne({email},{_id:1,student_name:1,computer_code:1,email:1,subjects:1,course:1,_class:1});
    return res.json({result});
  } catch (error) {
    next(error);
  }
};
exports.get_student_by_computer_code = async (req, res, next) => {
  try {
    const computer_code = req.body.computer_code;
    const result = await Student.findOne({computer_code},{_id:1,student_name:1,computer_code:1,email:1,subjects:1,course:1,_class:1});
    return res.json({result , status:true});
  } catch (error) {
    next(error);
  }
};
exports.update_student = async (req, res, next) => {
  const { student_name, computer_code, email, course, subjects, _class , _id} =
    req.body;
  try {
    const result = await Student.findByIdAndUpdate({_id},{
      student_name,
      computer_code,
      email,
      course,
      subjects,
      _class,
    });
    return res.json({ msg: "Student Updated", result, status: true });
  } catch (error) {
    next(error);
  }
};
