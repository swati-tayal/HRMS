const {validationResult} = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserInterviewer = require("../db/models/userInterviewer");

const getUserInterviewer = async (req, res, next) => {
    let userInterviewer;
    try {
      userInterviewer = await UserInterviewer.find();
    } catch (err) {
        return next(err)
    }

    if (!userInterviewer) {
        const err = new Error("No interviewer registered. Sign Up first");
        return next(err)
    }

    res.json({userInterviewer: userInterviewer.toObject({getters: true})})
}

const signUp = async (req, res, next) => {
   const errors = validationResult(req);

   if (!errors.isEmpty()) {
    const err = new Error("Invalid credentials. Try again");
    return next(err)
   }

   const {role, name, email, password} = req.body;

   let existingUserInterviewer;

   try {
    existingUserInterviewer = await UserInterviewer.findOne({email: email});
   } catch (err) {
    const error = new Error("Can not find the user interviewer");
    return next(error);
   }

   if (existingUserInterviewer) {
    const error = new Error("Interviewer already exists. Try log in.")
    return next(error)
   }

   let hashedPassword;

   try {
    hashedPassword = await bcrypt.hash(password, 12)
   } catch {
    const err = new Error("Could not create Interviewer1")
    return next(err)
   }

   const createdUserInterviewer = new UserInterviewer({
    role,
    name,
    email,
    password: hashedPassword
   })
   try {
    await createdUserInterviewer.save()
   } catch (err) {
    return next(err)
   }

   res.json({role: createdUserInterviewer.role, name: createdUserInterviewer.name})

}
const login = async (req, res, next) => {
   const { email, password} = req.body;

   let existingUserInterviewer;

   try {
    existingUserInterviewer = await UserInterviewer.findOne({email: email});
   } catch (err) {
    const error = new Error("Can not find the user interviewer");
    return next(error);
   }

   if (!existingUserInterviewer) {
    const error = new Error("Could not find the interviewer")
    return next(error)
   }

   let isValidPassword;

   try {
    isValidPassword = await bcrypt.compare(password, existingUserInterviewer.password)
   } catch {
    const err = new Error("Could not log in. Check credentials")
    return next(err)
   }

   if (!isValidPassword) {
    const err = new Error("Could not log in. Check credentials")
    return next(err)
   }

   res.json({role: existingUserInterviewer.role, interviewerId: existingUserInterviewer.id, email: existingUserInterviewer.email})

}



exports.getUserInterviewer = getUserInterviewer;
exports.signUp = signUp;
exports.login = login;