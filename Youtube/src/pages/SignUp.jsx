import React, { useState } from "react";
import "./Pages-Css/VideoUpload.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { NavLink } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [signupHandling, setSignupHandling] = useState({
    channelName: "",
    userName: "",
    Password: "",
    About: "",
    profile: "",
  });
  const signupFormHandling = (e) => {
    const { name, value } = e.target;
    setSignupHandling((prev) => ({ ...prev, [name]: value }));
  };
  const submitSignupForm = () => {
    console.log(signupHandling);
  };

  // uploading data to the cloudinary
  const handleProfileUpload = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "YouTube-App");
    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dxn0aauwu/image/upload",
        data
      );
      const imgUrl = response.data.url;
    setSignupHandling((prev) => ({ ...prev, 'profile': imgUrl }));

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="create_video">
      <div className="inner_div">
        <YouTubeIcon sx={{ fontSize: "5vw", color: "red" }} />
        <h2>Create Account</h2>
        <div className="upload_form">
          <input
            type="text"
            placeholder="Channel Name"
            name="channelName"
            value={signupHandling.channelName}
            onChange={signupFormHandling}
          />
          <input
            type="text"
            placeholder="User Name"
            name="userName"
            value={signupHandling.userName}
            onChange={signupFormHandling}
          />
          <input
            type="password"
            placeholder="Password"
            name="Password"
            value={signupHandling.Password}
            onChange={signupFormHandling}
          />
          <input
            type="text"
            placeholder="About Your Channel"
            name="About"
            value={signupHandling.About}
            onChange={signupFormHandling}
          />
          <div className="file_choose">
            <span>Profile</span>
            <input
              type="file"
              accept="images/*"
              onChange={handleProfileUpload}
              name="profile"
            />
          </div>
          <button className="red" onClick={submitSignupForm}>
            SignUp
          </button>
          <NavLink to={"/"}>
            <button>Go Home</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
