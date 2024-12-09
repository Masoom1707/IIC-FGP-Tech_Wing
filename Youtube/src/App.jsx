import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'

function App() {
  const [toggleSideNavbar, setToggleSideNavbar] = useState(true)
  const sidenavFn = (value) => {
    setToggleSideNavbar(value)
  }

  return (
    <>
      <Navbar sidenavFn={sidenavFn} toggleSideNavbar={toggleSideNavbar} />
      <HomePage toggleSideNavbar={toggleSideNavbar} />
    </>
  )
}

export default App
