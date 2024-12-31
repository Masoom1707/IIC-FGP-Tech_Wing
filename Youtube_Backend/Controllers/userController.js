import { user } from "../Models/User.js";
import bcrypt from "bcryptjs";

export const signUp = async (req, res) => {
  try {
    const { channelName, userName, password, about, profile } = req.body;
    const userExist = await user.findOne({ userName });

    if (userExist) {
      res.status(400).json({ error: "User-Name already exist" });
    } else {
      let hashedPassword = await bcrypt.hash(password, 10);
      const updatedUser = new user({
        channelName,
        userName,
        password: hashedPassword,
        about,
        profile,
      });
      await updatedUser.save();
      res
        .status(201)
        .json({
          message: "User Registered Successfully",
          success: "yes",
          data: updatedUser,
        });
    }
  } catch (error) {
    console.error("Error in signup: ", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

export const signIn = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const loginUser = await user.findOne({ userName });

    if (loginUser && (await bcrypt.compare(password, loginUser.password))) {
      res.json({ message: "login successfully", success: "true" });
    } else {
      res.status(400).json({ error: "Invalid Credentials" });
    }
  } catch (error) {
    console.error("Error in signIn: ", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};
