const express = require('express');
const router = express.Router();

const { add_student , get_all_student , remove_student, update_student ,get_student_byID, get_student_by_computer_code} = require("../controllers/student");

router.route("/add_student").post(add_student);

router.route("/get_all_student").post(get_all_student);

router.route("/remove_student").post(remove_student);

router.route("/update_student").post(update_student);

router.route("/get_student_byID").post(get_student_byID);

router.route("/get_student_by_computer_code").post(get_student_by_computer_code);

module.exports = router;