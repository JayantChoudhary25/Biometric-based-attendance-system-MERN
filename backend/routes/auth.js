const express = require('express');
const router = express.Router();

const { register, login, forgotPassword, resetPassword } = require("../controllers/auth");
const { add_teacher , get_all_teacher , remove_teacher, update_teacher} = require("../controllers/teacher");

router.post("/register",register);

router.post("/login",login);

router.route("/forgotpassword").post(forgotPassword);

router.route("/resetpassword/:resetToken").put(resetPassword);

router.route("/add_teacher").post(add_teacher);

router.route("/get_all_teacher").post(get_all_teacher);

router.route("/remove_teacher").post(remove_teacher);

router.route("/update_teacher").post(update_teacher);

module.exports = router;