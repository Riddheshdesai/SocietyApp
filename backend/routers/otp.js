const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");


router.post("/send/otp", async (req, res) => {

  return res.status(201).json({ message: "OTP sended success" });
});

router.post("/verify/otp", async (req, res) => {
  try {
    if (!req.body.otp) {
      return res.status(401).json({ message: "please Enter OTP" });
    }

    if ("12345" !== req.body.otp) {
      return res.status(401).json({ message: "Invalid OTP" });
    }
    return res.status(201).json({ message: "OTP verified" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;