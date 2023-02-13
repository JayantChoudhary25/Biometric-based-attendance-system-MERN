const express = require('express');
const router = express.Router();

const { register, login, forgotPassword, resetPassword } = require("../controllers/auth");
// const { add_teacher , get_all_teacher , remove_teacher, update_teacher} = require("../controllers/teacher");
const { add_student , get_all_student , remove_student, update_student} = require ("../controllers/student");

router.post("/register",register);

router.post("/login",login);

router.route("/forgotpassword").post(forgotPassword);

router.route("/resetpassword/:resetToken").put(resetPassword);

// Teachers 
// router.route("/add_teacher").post(add_teacher);

// router.route("/get_all_teacher").post(get_all_teacher);

// router.route("/remove_teacher").post(remove_teacher);

// router.route("/update_teacher").post(update_teacher);

// Student
router.route("/add_student").post(add_student);

router.route("/get_all_student").post(get_all_student);

router.route("/remove_student").post(remove_student);

router.route("/update_student").post(update_student);

module.exports = router;