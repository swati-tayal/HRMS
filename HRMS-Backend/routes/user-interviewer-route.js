const express = require("express");
const { check } = require("express-validator");
const userInterviewerController = require("../controllers/user-interviewer-controller");

const router = express.Router();

router.post(
  "/signUp",
  [
    check("role").not().isEmpty(),
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 7 }),
  ],
  userInterviewerController.signUp
);

router.post(
  "/login",
  [
    check("role").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 7 }),
  ],
  userInterviewerController.login
);

module.exports = router;
