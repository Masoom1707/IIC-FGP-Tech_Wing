import React from 'react'
import './Pages-Css/Login.css'
import {NavLink} from 'react-router-dom';

const Login = () => {
  return (
    <div className="create_video">
        <div className="login_div">
            <h2>LogIn</h2>
            <input type="text" placeholder='Email' required />
            <input type="text" placeholder='Password' required />
            <NavLink to={'/signin'}>Sign In</NavLink>
            <p>Don't have a account? <NavLink to={'/signup'}>Sign Up</NavLink></p>
        </div>
    </div>
  )
}

export default Login