const express = require("express");
const { check } = require("express-validator");
const checkAuth  = require("..//middlewares/checkAuth.js");
const interviewerController = require("../controllers/interviewer-controller");

const router = express.Router();

// get Interviewers list form db
router.get("/", interviewerController.getInterviewers);

router.get(
  "/interviewer/:interviewerId",
  interviewerController.getInterviewerById
);

router.use(checkAuth);
// add interviewers to db
router.post(
  "/",
  [
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("descriptiopn").isLength({ min: 7 }),
  ],
  interviewerController.addInterviewer
);

module.exports = router;
