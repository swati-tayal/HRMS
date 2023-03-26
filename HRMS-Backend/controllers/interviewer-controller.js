const { validationResult } = require("express-validator");
const Interviewer = require("../db/models/interviewer");

const getInterviewers = async (req, res, next) => {
  let interviewers;
  try {
    interviewers = await Interviewer.find();
  } catch (err) {
    return next(err);
  }

  if (!interviewers) {
    const err = new Error("No interviewers found!");
    return next(err);
  }
  res.json({
    interviewers: interviewers.map((interviewer) =>
      interviewer.toObject({ getters: true })
    ),
  });
};

const getInterviewerById = async (req, res, next) => {
  let interviewer;
  const interviewerId = req.params.interviewerId;

  try {
    interviewer = await Interviewer.findById(interviewerId);
  } catch (err) {
    return next(err);
  }

  res.json({ interviewer: interviewer.toObject({ getters: true }) });
};

const addInterviewer = async (req, res, next) => {
  const errors = validationResult(req.body);

  if (!errors.isEmpty()) {
    const err = new Error("Invalid inputs");
    return next(err);
  }

  const { name, email, description } = req.body;

  const interviewer = new Interviewer({
    name,
    email,
    description,
  });

  try {
    await interviewer.save();
  } catch (err) {
    return next(err);
  }

  res.json({ interviewer });
};

exports.getInterviewers = getInterviewers;
exports.addInterviewer = addInterviewer;
exports.getInterviewerById = getInterviewerById;
