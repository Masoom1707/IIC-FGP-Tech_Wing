import React from 'react'
import './Comp-Css/SideNavbar.css'

import HomeIcon from '@mui/icons-material/Home';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import HistoryIcon from '@mui/icons-material/History';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ScheduleIcon from '@mui/icons-material/Schedule';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

const SideNavbar = ({toggleSideNavbar}) => {
  return (
    <div className={toggleSideNavbar?"side-nav":'hideSideNav'}>
        <div><HomeIcon /><span>Home</span></div>
        <div><VideoCallIcon /><span>Shorts</span></div>
        <div><SubscriptionsIcon /><span>Subscription</span></div>
        <hr />
        <div><RecentActorsIcon /><span>Your Channel</span></div>
        <div><HistoryIcon /><span>History</span></div>
        <div><PlaylistPlayIcon /><span>Playlist</span></div>
        <div><OndemandVideoIcon /><span>Your Video</span></div>
        <div><ScheduleIcon /><span>Watch Later</span></div>
        <div><ThumbUpOffAltIcon /><span>Liked Videos</span></div>
        
        <div><OndemandVideoIcon /><span>Your Video</span></div>
        <div><ScheduleIcon /><span>Watch Later</span></div>
        <div><ThumbUpOffAltIcon /><span>Liked Videos</span></div>
    </div>
  )
}

export default SideNavbar