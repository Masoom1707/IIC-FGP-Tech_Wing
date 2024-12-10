import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import VideoPage from './pages/VideoPage'
import ProfilePage from './pages/ProfilePage'


function App() {
  const [toggleSideNavbar, setToggleSideNavbar] = useState(true)
  const sidenavFn = (value) => {
    setToggleSideNavbar(value)
  }

  return (
    <>
      <Navbar sidenavFn={sidenavFn} toggleSideNavbar={toggleSideNavbar} />
      <Routes>
        <Route path='/' element={<HomePage toggleSideNavbar={toggleSideNavbar} />}/>
        <Route path='/watch/:id' element={<VideoPage/>} />
        <Route path='/@user/:id' element={<ProfilePage toggleSideNavbar={toggleSideNavbar} />} />
      </Routes>
      
    </>
  )
}

export default App
