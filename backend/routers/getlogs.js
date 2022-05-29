const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");

router.post("/viewlogs", async (req, res) => {
    try {
        const { mobile_number} = req.body;
    
        if (!mobile_number) {
          return res.status(401).json({ message: "mobile number mandatory" });
        }
        const logUser = await User.findOne({mobile_number:mobile_number})
        res.send(logUser)
      } catch (error) {
        console.log(error);
      }
})

module.exports = router;