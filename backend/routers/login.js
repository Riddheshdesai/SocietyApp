const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");

router.post("/login", async (req, res) => {
  try {
    const { mobile_number, password } = req.body;

    if (!mobile_number || !password) {
      return res.status(401).json({ message: "All fields are mandatory" });
    }

    const loginUser = await User.findOne({ mobile_number: mobile_number });
    if (!loginUser) {
      return res
        .status(401)
        .json({ message: "Invalid Credentials Please Register" });
    }
    if (loginUser.password !==password ) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    res.status(201).json({ message: "Login Success" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
