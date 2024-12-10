import React from "react";
import "./Comp-Css/Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = ({sidenavFn, toggleSideNavbar}) => {
  const [userPic, setUserPic] = React.useState('')
  const [openMenu, setOpenMenu] = React.useState(false)
  
  const handleOpenMenu = () => {
    setOpenMenu(prev => !prev);
  }

  const toglleSideNav  = () => {
    sidenavFn(!toggleSideNavbar)
  }

  const navigation = useNavigate()
  const handleProfileNavigation = () => {
    navigation('/@user/1710')
    setOpenMenu(false)
  }

  
  return (
    <nav>
      <div className="nav-left">
        <div className="inner-left" >
          <div onClick={toglleSideNav}><MenuIcon sx={{color:"white"}} className="hamburger" /></div>
          <NavLink to={'/'} className="youtube_icon"><YouTubeIcon sx={{color:"red"}}  /> <span>MastTube</span></NavLink>
        </div>
      </div>
      <div className="nav-middle">
        <div className="inner-middle">
          <input type="text" placeholder="Search" />
          <div className="search"><SearchIcon /></div>
          <div className="mic">
            <MicIcon/>
          </div>
        </div>
      </div>
      <div className="nav-right">
        <VideoCallIcon sx={{color:"white", cursor:"pointer", fontSize:"30px"}} className="hover" />
        <NotificationsIcon sx={{color:"white"}} className="notifi hover" />
        <img onClick={handleOpenMenu} src={userPic} className="profile"></img>
      </div>
      { openMenu &&
      <div className="option-menu">
        <p onClick={handleProfileNavigation}>Profile</p>
        <p>Log-In</p>
        <p>Log-Out</p>
        <p>Settings</p>
      </div>
      }
    </nav>
  );
};

export default Navbar;
