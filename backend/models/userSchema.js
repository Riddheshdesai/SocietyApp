const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  mobile_number: {
    type: Number,
    unique: true,
  },
  society: {
    type: String,
  },
  password: {
    type: String,
  },
  logs: [
    {
      mobile_number: {
        type: Number
      },
      society_name: {
        type: String,
      },
      entry: {
        type: String,
      },
      time: {
        type: String,
      },
    },
  ]
});


const User = mongoose.model("User", userSchema);
module.exports = User;
