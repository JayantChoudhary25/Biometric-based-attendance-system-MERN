const Teacher = require("../models/Teacher");

exports.add_teacher = async (req, res, next) => {
  const { teacher_name, phone_number, email, subject ,_class} = req.body;
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
    const result = await Teacher.find({},{_id:0, teacher_name:1 , phone_number:1,email:1,subject:1,_class:1});
    return res.json({result });
  } catch (error) {
    next(error);
  }
};

exports.get_teacher_byID = async (req, res, next) => {
  try {
    const email = req.body.email;
    const result = await Teacher.findOne({email},{_id:1, teacher_name:1 , phone_number:1,email:1,subject:1,_class:1});
    return res.json({result});
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
    const { teacher_name, phone_number, email, subject, _class } = req.body;
    try {
      const result = await Teacher.findByIdAndUpdate(req.body._id, {
        teacher_name,
        email,
        phone_number,
        subject,
        _class,
      });
      return res.json({ msg: "Teacher Updated", status: true });
    } catch (error) {
      next(error);
    }
};