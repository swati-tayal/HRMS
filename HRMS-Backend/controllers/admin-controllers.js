const {validationResult} = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Admin = require("../db/models/admin");

const getAdmin = async (req, res, next) => {
    let admin;
    try {
      admin = await Admin.find();
    } catch (err) {
        return next(err)
    }

    if (!admin) {
        const err = new Error("No interviewer registered. Sign Up first");
        return next(err)
    }

    res.json({admin: admin.toObject({getters: true})})
}

const signUp = async (req, res, next) => {
   const errors = validationResult(req);

   if (!errors.isEmpty()) {
    const err = new Error("Invalid credentials. Try again");
    return next(err)
   }

   const {role, name, email, password} = req.body;

   let existingAdmin;

   try {
    existingAdmin = await Admin.findOne({email: email});
   } catch (err) {
    const error = new Error("Can not find the user");
    return next(error);
   }

   if (existingAdmin) {
    const error = new Error("Admin already exists. Try log in.")
    return next(error)
   }

   let hashedPassword;

   try {
    hashedPassword = await bcrypt.hash(password, 12)
   } catch {
    const err = new Error("Could not create Interviewer1")
    return next(err)
   }

   const createdAdmin = new Admin({
    role,
    name,
    email,
    password: hashedPassword
   })
   try {
    await createdAdmin.save()
   } catch (err) {
    return next(err)
   }

   let token;
   try {
   token = jwt.sign(
     { userId: createdAdmin.id, email: createdAdmin.email },
     "secretpass_dont_share",
     { expiresIn: "1h" }
   );
   } catch (err) {
     const error = new HttpError("Couldn't signup!", 500);
     return next(error);
   }
   res.json({role: createdAdmin.role, name: createdAdmin.name, token: token})

}
const login = async (req, res, next) => {
   const { email, password} = req.body;

   let existingAdmin;

   try {
    existingAdmin = await Admin.findOne({email: email});
   } catch (err) {
    const error = new Error("Can not find the user admin");
    return next(error);
   }

   if (!existingAdmin) {
    const error = new Error("Could not find the admin")
    return next(error)
   }

   let isValidPassword;

   try {
    isValidPassword = await bcrypt.compare(password, existingAdmin.password)
   } catch {
    const err = new Error("Could not log in. Check credentials")
    return next(err)
   }

   if (!isValidPassword) {
    const err = new Error("Could not log in. Check credentials")
    return next(err)
   }

   let token;
   try {
   token = jwt.sign(
     { userId: existingAdmin.id, email: existingAdmin.email },
     "secretpass_dont_share",
     { expiresIn: "1h" }
   );
   } catch (err) {
     const error = new HttpError("Couldn't login, check creds!", 500);
     return next(error);
   }

   res.json({role: existingAdmin.role, email: existingAdmin.email, token: token, id:existingAdmin.id})

}



exports.getAdmin = getAdmin;
exports.signUp = signUp;
exports.login = login;