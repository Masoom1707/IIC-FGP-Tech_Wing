import React, { useEffect } from "react";
import "./Pages-Css/ProfilePage.css";
import SideNavbar from "../components/SideNavbar";
import VideoCard from "../components/VideoCard";
import { NavLink } from "react-router-dom";
import axios from 'axios'
import {useParams} from 'react-router-dom'

const ProfilePage = ({ toggleSideNavbar }) => {

  const fetchUserById = async() => {
    await axios.get(``)
  }

  useEffect(() => {
    fetchUserById();
  }, [])

  return (
    <div className="home-container">
      <SideNavbar toggleSideNavbar={toggleSideNavbar} />

      <div className="profile-container">
        <div className="banner">
            <img src="../public/images.jpg" alt="banner" />
        </div>
        <div className="channel_detail">
            <div className="channel_profile">
                <img src="../public/images (1).jpg" alt="" />
            </div>
            <div className="channel_details">
                <h1>Masoom</h1>
                <p className="channel-info">@masoom | <span>298K subscriber</span> | <span>20 videos</span></p>
                <p className="channel-info">Hey Every-One welcome to my youtube channel plz subscribe</p>
                <div className="subs_channel">
                <p>Subscribe</p>
              </div>
            </div>
        </div>
        <div className="video_type_section">
            <div className="line"></div>
            <NavLink to='#'>Home</NavLink>
            <NavLink to='#'>Video</NavLink>
            <NavLink to='#'>Shorts</NavLink>
            <NavLink to='#'>Playlist</NavLink>
            <NavLink to='#'>Live</NavLink>
        </div>
        <VideoCard toggleSideNavbar={toggleSideNavbar} />
      </div>

    </div>
  );
};

export default ProfilePage;
