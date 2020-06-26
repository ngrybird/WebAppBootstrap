const express = require("express");
const path = require("path");
const signupController = require("../controllers/signupController");

const router = express.Router();

router.get("/signup", signupController.getSignup);
router.post("/signup", signupController.postSignup);

module.exports = router;
