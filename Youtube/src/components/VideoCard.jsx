import React from "react";
import { NavLink } from "react-router-dom";

const VideoCard = ({ toggleSideNavbar }) => {
  return (
    <div className={toggleSideNavbar ? "video_card_section" : "four_grid"}>
      <NavLink to={"/watch/1710"} className="video_container">
        <img src="../public/images.jpg" alt="Thumbnail" />
        <span>29:34</span>
        <div className="user_detail">
          <div className="video_profile">
            <img src="../public/images (1).jpg" alt="video_profile" />
          </div>
          <div className="detail">
            <p className="title">How to get select in IIC </p>
            <h3>Masoom</h3>
            <p className="views">
              459k <span>3 days ago</span>
            </p>
          </div>
        </div>
      </NavLink>

      <NavLink to={"/watch/3434"} className="video_container">
        <img src="../public/images.jpg" alt="Thumbnail" />
        <span>29:34</span>
        <div className="user_detail">
          <div className="video_profile">
            <img src="../public/images (1).jpg" alt="video_profile" />
          </div>
          <div className="detail">
            <p className="title">How to get select in IIC </p>
            <h3>Masoom</h3>
            <p className="views">
              459k <span>3 days ago</span>
            </p>
          </div>
        </div>
      </NavLink>

      <NavLink to={"/watch/563"} className="video_container">
        <img src="../public/images.jpg" alt="Thumbnail" />
        <span>29:34</span>
        <div className="user_detail">
          <div className="video_profile">
            <img src="../public/images (1).jpg" alt="video_profile" />
          </div>
          <div className="detail">
            <p className="title">How to get select in IIC </p>
            <h3>Masoom</h3>
            <p className="views">
              459k <span>3 days ago</span>
            </p>
          </div>
        </div>
      </NavLink>

      <NavLink to={"/watch/252"} className="video_container">
        <img src="../public/images.jpg" alt="Thumbnail" />
        <span>29:34</span>
        <div className="user_detail">
          <div className="video_profile">
            <img src="../public/images (1).jpg" alt="video_profile" />
          </div>
          <div className="detail">
            <p className="title">How to get select in IIC </p>
            <h3>Masoom</h3>
            <p className="views">
              459k <span>3 days ago</span>
            </p>
          </div>
        </div>
      </NavLink>

      <NavLink to={"/watch/58"} className="video_container">
        <img src="../public/images.jpg" alt="Thumbnail" />
        <span>29:34</span>
        <div className="user_detail">
          <div className="video_profile">
            <img src="../public/images (1).jpg" alt="video_profile" />
          </div>
          <div className="detail">
            <p className="title">How to get select in IIC </p>
            <h3>Masoom</h3>
            <p className="views">
              459k <span>3 days ago</span>
            </p>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default VideoCard;
