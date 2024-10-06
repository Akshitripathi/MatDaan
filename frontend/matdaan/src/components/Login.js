import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // Import CSS for styling
import logo from '../image/logo.jpg'; // Adjust path based on your folder structure

const Login = () => {
  return (
    <div className="login-page">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="login-container">
        <h1>Login</h1>
        <form className="login-form">
          <div className="form-group">
            <label>Username:</label>
            <input type="text" name="username" required />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" name="password" required />
          </div>
          <button type="submit">Log In</button>
        </form>
        <div className="signup-prompt">
          <p>Don't have an account?</p>
          <Link to="/signup" className="signup-button">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
