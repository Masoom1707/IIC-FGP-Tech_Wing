import React from "react";
import "./Pages-Css/VideoUpload.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { NavLink } from "react-router-dom";

const VideoUpload = () => {
  return (
    <div className="create_video">
      <div className="inner_div">
        <YouTubeIcon sx={{ fontSize: "5vw", color: "red" }} />{" "}
        <h2>Create Something</h2>
        <div className="upload_form">
          <input type="text" placeholder="Name the title of video" />
          <input type="text" placeholder="Description" />
          <input type="text" placeholder="Category" />
          <div className="file_choose">
            <span>Upload Thumbnail</span>
            <input type="file" accept="image/*" />
          </div>
          <div className="file_choose">
            <span>Choose Video</span>
            <input type="file" accept="video/mp4, video/webm, video/*" />
          </div>
          <button className="red">Create Video</button>
          <NavLink to={"/"}>
            <button>Go Home</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default VideoUpload;
