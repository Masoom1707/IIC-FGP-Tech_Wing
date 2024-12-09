import React from 'react'
import './Pages-Css/HomePage.css'
import SideNavbar from '../components/SideNavbar'
import Content from '../components/Content'

const HomePage = ({toggleSideNavbar}) => {
  
  return (
    <div className="home-container">
        <SideNavbar toggleSideNavbar={toggleSideNavbar} />
        <Content toggleSideNavbar={toggleSideNavbar} />
    </div>
  )
}

export default HomePage