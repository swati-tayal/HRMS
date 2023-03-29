const express = require("express");
const { check } = require("express-validator");
const adminController = require("../controllers/admin-controllers");
const router = express.Router();

router.post(
  "/signUp",
  [
    check("role").not().isEmpty(),
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 7 }),
  ],
  adminController.signUp
);
router.post(
  "/login",
  [
    check("role").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 7 }),
  ],
  adminController.login
);

module.exports = router;
