import React from "react";
import './Comp-Css/Content.css'
import VideoCard from "./VideoCard";

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

      <VideoCard toggleSideNavbar={toggleSideNavbar} />
      
    </div>
  );
};

export default Content;
