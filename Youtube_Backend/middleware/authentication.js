import jwt from "jsonwebtoken";
import { user } from "../Models/User.js";

export const authentication = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res
      .status(401)
      .json({ message: "No token found, authorization failed" });
  } else {
    try {
      const verifyJwt = jwt.verify(token, "secret_key");

      const foundUser = await user
        .findById(verifyJwt.userId)
        .select("-password");
        
      if (!foundUser) {
        return res.status(404).json({ error: "User not found" });
      }

      req.user = foundUser;
      next();
    } catch (error) {
      res.status(401).json({ error: "Token is not valid" });
    }
  }
};
