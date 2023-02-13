const Teacher = require("../models/Teacher");

exports.add_teacher = async (req, res, next) => {
  const { teacher_name, phone_number, email, subject, _class} = req.body;
  try {
    const result = await Teacher.create({
      teacher_name,
      email,
      phone_number,
      subject,
      _class,
    });
    return res.json({ msg: "Teacher Created", result, status: true });
  } catch (error) {
    next(error);
  }
};

exports.get_all_teacher = async (req, res, next) => {
  try {
    const result = await Teacher.find();
    return res.json({ Tecaher_Details: result, status: true });
  } catch (error) {
    next(error);
  }
};

exports.remove_teacher = async (req, res, next) => {
  try {
    const result = await Teacher.findByIdAndDelete({ _id: req.body._id });
    return res.json({
      Tecaher_Details: "Teacher removed",
      result,
      status: true,
    });
  } catch (error) {
    next(error);
  }
};

exports.update_teacher = async (req, res, next) => {
    const { teacher_name, phone_number, email, subject, _class} = req.body;
    try {
      const result = await Teacher.updateMany({
        teacher_name,
        email,
        phone_number,
        subject,
        _class,
        where: {
            _id: req.body._id
        }
      });
      return res.json({ msg: "Teacher Updated", status: true });
    } catch (error) {
      next(error);
    }
};