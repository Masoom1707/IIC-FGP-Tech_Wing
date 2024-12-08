import React from 'react'
import './Pages-Css/HomePage.css'
import SideNavbar from '../components/SideNavbar'
import Content from '../components/Content'

const HomePage = () => {
  return (
    <div className="home-container">
        <SideNavbar />
        <Content />
    </div>
  )
}

export default HomePage