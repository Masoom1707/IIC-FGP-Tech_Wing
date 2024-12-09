import React from "react";
import './Comp-Css/Content.css'

const Content = ({toggleSideNavbar}) => {

  return (
    <div className="content-container">
      <div className="top-content">
        <a href="#">All</a>
        <a href="#">JavaScript</a>
        <a href="#">Music</a>
        <a href="#">News</a>
        <a href="#">Cricket</a>
        <a href="#">Music</a>
        <a href="#">Gaming</a>
        <a href="#">Live</a>
        <a href="#">Comedy</a>
        <a href="#">Watched</a>
        <a href="#">Trending</a>
        <a href="#">Arijit</a>
        <a href="#">Hollywood</a>
        <a href="#">Football</a>
        <a href="#">Coding</a>
        <a href="#">Sports</a>
        
      </div>
      <div className={toggleSideNavbar ? "video_card_section" : 'four_grid' }>

        <div className="video_container">
          <img src="../public/images.jpg" alt="Thumbnail" />
          <span>29:34</span>
          <div className="user_detail">
            <div className="video_profile">
              <img src="../public/images (1).jpg" alt="video_profile" />
            </div>
          <div className="detail">
            <p className="title">How to get select in IIC   </p>
            <h3>Masoom</h3>
            <p className="views">459k <span>3 days ago</span></p>
          </div>
        </div>
        </div>

        <div className="video_container">
          <img src="../public/images.jpg" alt="Thumbnail" />
          <span>29:34</span>
          <div className="user_detail">
            <div className="video_profile">
              <img src="../public/images (1).jpg" alt="video_profile" />
            </div>
          <div className="detail">
            <p className="title">How to get select in IIC   </p>
            <h3>Masoom</h3>
            <p className="views">459k <span>3 days ago</span></p>
          </div>
        </div>
        </div>

        <div className="video_container">
          <img src="../public/images.jpg" alt="Thumbnail" />
          <span>29:34</span>
          <div className="user_detail">
            <div className="video_profile">
              <img src="../public/images (1).jpg" alt="video_profile" />
            </div>
          <div className="detail">
            <p className="title">How to get select in IIC   </p>
            <h3>Masoom</h3>
            <p className="views">459k <span>3 days ago</span></p>
          </div>
        </div>
        </div>

        <div className="video_container">
          <img src="../public/images.jpg" alt="Thumbnail" />
          <span>29:34</span>
          <div className="user_detail">
            <div className="video_profile">
              <img src="../public/images (1).jpg" alt="video_profile" />
            </div>
          <div className="detail">
            <p className="title">How to get select in IIC   </p>
            <h3>Masoom</h3>
            <p className="views">459k <span>3 days ago</span></p>
          </div>
        </div>
        </div>

        <div className="video_container">
          <img src="../public/images.jpg" alt="Thumbnail" />
          <span>29:34</span>
          <div className="user_detail">
            <div className="video_profile">
              <img src="../public/images (1).jpg" alt="video_profile" />
            </div>
          <div className="detail">
            <p className="title">How to get select in IIC   </p>
            <h3>Masoom</h3>
            <p className="views">459k <span>3 days ago</span></p>
          </div>
        </div>
        </div>

        <div className="video_container">
          <img src="../public/images.jpg" alt="Thumbnail" />
          <span>29:34</span>
          <div className="user_detail">
            <div className="video_profile">
              <img src="../public/images (1).jpg" alt="video_profile" />
            </div>
          <div className="detail">
            <p className="title">How to get select in IIC   </p>
            <h3>Masoom</h3>
            <p className="views">459k <span>3 days ago</span></p>
          </div>
        </div>
        </div>
        
        
      </div>

      

      
    </div>
  );
};

export default Content;
