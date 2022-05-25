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
      user_name: {
        type: String,
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
