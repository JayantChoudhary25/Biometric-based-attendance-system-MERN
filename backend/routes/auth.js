const express = require('express');
const router = express.Router();

const { register, login, forgotPassword, resetPassword } = require("../controllers/auth");

router.post("/register",register);

router.post("/login",login);

router.route("/forgotpassword").post(forgotPassword);

router.route("/resetpassword/:resetToken").put(resetPassword);

module.exports = router;