const express = require("express");
const router = express.Router();

router.get("/logout", (req, res) => {
  
  res.status(201).json({ message: "Logout Success" });
});

module.exports = router;
