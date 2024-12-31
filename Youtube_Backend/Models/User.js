import mongoose from "mongoose";

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
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      unique:true,
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

export const user = mongoose.model("User", userSchema);

