import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, data } from "react-router-dom";

const VideoCard = ({ toggleSideNavbar }) => {
  const [allvideos, setAllVideos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/allvideos")
      .then((res) => {
        setAllVideos(res.data.video);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={toggleSideNavbar ? "video_card_section" : "four_grid"}>
      {allvideos?.map((video, index) => {
        return (
          <NavLink to={`/watch/${video._id}`} className="video_container" key={video._id}>
            <img src={video.thumbnail} alt="Thumbnail" />
            <span>29:34</span>
            <div className="user_detail">
              <div className="video_profile">
                <img src={video.user.profile} alt="video_profile" />
              </div>
              <div className="detail">
                <h3 className="title">{video.title} </h3>
                <p>{video.user.userName}</p>
                <p className="views">
                  459k <span>3 days ago</span>
                </p>
              </div>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default VideoCard;
