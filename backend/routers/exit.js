const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");

router.post("/exit", async (req, res) => {
  try {
    const { mobile_number, society_name, entry, time } = req.body;

    if (!mobile_number || !society_name || !entry || !time) {
      return res.status(401).json({ message: "All fields are mandatory" });
    }

    const log = {
      mobile_number,
      society_name,
      entry,
      time,
    };

    const loginUser = await User.findOneAndUpdate({
      mobile_number: req.body.mobile_number,
    },
    {
      $push: {
        logs: log,
      }
    }
    );

    if (!loginUser) {
      return res.status(401).json({ message: "Credintial Invalid" });
    }
    res.status(201).json({ message: "Exit success" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
