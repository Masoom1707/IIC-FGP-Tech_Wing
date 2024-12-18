const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    channelName: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
      maxlength: 10,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    about: {
      type: String,
      required: true,
    },
    profile: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
