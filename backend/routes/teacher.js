const express = require('express');
const router = express.Router();

const { add_teacher , get_all_teacher , remove_teacher, update_teacher, get_teacher_byID} = require("../controllers/teacher");

router.route("/add_teacher").post(add_teacher);

router.route("/get_all_teacher").post(get_all_teacher);

router.route("/get_teacher_byID").post(get_teacher_byID);

router.route("/remove_teacher").post(remove_teacher);

router.route("/update_teacher").post(update_teacher);

module.exports = router;