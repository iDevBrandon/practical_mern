const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

// @route   POST api/users
// @desc    Register user
// @access  Public
router.post(
  "/",

  body("name", "Name is required").not().isEmpty(),
  body("email", "Email is required").isEmail(),
  body("password", "More than 6 characters Password is required").isLength({
    min: 6,
  }),

  (req, res) => {
    // console.log(req.body); access the data from req.body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send("User route");
  }
);

module.exports = router;
