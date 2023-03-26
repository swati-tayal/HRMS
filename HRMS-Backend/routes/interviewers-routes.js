const express = require("express");
const { check } = require("express-validator");
const interviewerController = require("../controllers/interviewer-controller");

const router = express.Router();

// get Interviewers list form db
router.get("/", interviewerController.getInterviewers);

router.get("/interviewer/:interviewerId", interviewerController.getInterviewerById)

// add interviewers to db
router.post("/", interviewerController.addInterviewer)

module.exports = router;