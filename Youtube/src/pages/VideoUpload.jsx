import React, { useState } from "react";
import "./Pages-Css/VideoUpload.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { NavLink } from "react-router-dom";
import axios from "axios";


const VideoUpload = () => {
  const [videoUploadForm, setVideoUploadForm] = useState({
    Title: "",
    Description: "",
    Category: "",
    Thumbnail: "",
    Video: "",
  });

  const handleCreateVideoForm = (e) => {
    const { name, value } = e.target;
    setVideoUploadForm((prev) => ({ ...prev, [name]: value }));
  };

  // upload data to the cloudinary
  const handleCloudinaryData = async (e, fileType) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "YouTube-App");
    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dxn0aauwu/${fileType}/upload`,
        data
      );
      const dataUrl = response.data.url;
      const dataType =
        fileType === "image" ? 'Thumbnail' : 'Video';
      setVideoUploadForm((prev) => ({ ...prev, [dataType]: dataUrl }));
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="create_video">
      <div className="inner_div">
        <YouTubeIcon sx={{ fontSize: "5vw", color: "red" }} />{" "}
        <h2>Create Something</h2>
        <div className="upload_form">
          <input
            type="text"
            placeholder="Title of the Video"
            name="Title"
            value={videoUploadForm.Title}
            onChange={handleCreateVideoForm}
          />
          <input
            type="text"
            placeholder="Description"
            name="Description"
            value={videoUploadForm.Description}
            onChange={handleCreateVideoForm}
          />
          <input
            type="text"
            placeholder="Category"
            name="Category"
            value={videoUploadForm.Category}
            onChange={handleCreateVideoForm}
          />
          <div className="file_choose">
            <span>Upload Thumbnail</span>
            <input
              type="file"
              accept="image/*"
              name="Thumbnail"
              onChange={(e) => handleCloudinaryData(e, "image")}
            />
          </div>
          <div className="file_choose">
            <span>Choose Video</span>
            <input
              type="file"
              accept="video/mp4, video/webm, video/*"
              name="Video"
              onChange={(e) => handleCloudinaryData(e, "video")}
            />
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
