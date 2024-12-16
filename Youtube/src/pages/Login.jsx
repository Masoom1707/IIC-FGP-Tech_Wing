import React, { useState } from "react";
import "./Pages-Css/Login.css";
import { NavLink } from "react-router-dom";

const Login = ({ removeLoginPop }) => {
  const [loginHandling, setLoginHandling] = useState({
    Email: "",
    Password: "",
  });
  const handleLoginForm = (e) => {
    const { name, value } = e.target;
    setLoginHandling((prev) => ({ ...prev, [name]: value }));
  };
  const handleLoginSubmit = () => {
    console.log(loginHandling);
  };

  return (
    <div className="create_video login_position">
      <div className="login_div">
        <h2>LogIn</h2>
        <input
          type="email"
          name="Email"
          value={loginHandling.Email}
          placeholder="Email"
          required
          onChange={handleLoginForm}
        />
        <input
          type="password"
          name="Password"
          value={loginHandling.Password}
          placeholder="Password"
          required
          onChange={handleLoginForm}
        />
        <NavLink to={"/login"} onClick={handleLoginSubmit}>
          Log In
        </NavLink>
        <NavLink onClick={() => removeLoginPop()}>Cancel</NavLink>
        <p>
          Don't have a account?{" "}
          <NavLink to={"/signup"} onClick={() => removeLoginPop()}>
            Sign Up
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
