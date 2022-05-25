const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");

router.post("/entry", async (req, res) => {
  try {
    const { user_name, society_name, entry, time } = req.body;

    if (!user_name || !society_name || !entry || !time) {
      return res.status(401).json({ message: "All fields are mandatory" });
    }

    const log = {
      user_name,
      society_name,
      entry,
      time,
    };

    const loginUser = await User.findOne({
      mobile_number: req.body.mobile_number,
    });

    if (!loginUser) {
      return res.status(401).json({ message: "Credintial Invalid" });
    }
    User.logs.push(log)
    await User.save();
    res.status(201).json({ message: "Entry success" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
