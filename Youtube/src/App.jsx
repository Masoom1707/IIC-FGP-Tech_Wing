import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import VideoPage from './pages/VideoPage'
import ProfilePage from './pages/ProfilePage'
import VideoUpload from './pages/VideoUpload'
import SignUp from './pages/SignUp'
import axios from 'axios'

function App() {
  const [toggleSideNavbar, setToggleSideNavbar] = useState(true)

  // useEffect(() => {
  //   axios.get('http://localhost:3000/api/allvideos').then(res => {
  //     console.log(res);
  //   }).catch(err => {
  //     console.log(err);
  //   })
  // }, [])

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
        <Route path='/create/:id' element={<VideoUpload />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App
