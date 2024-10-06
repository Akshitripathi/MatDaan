import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css'; // Import CSS for styling
import logo from '../image/logo.jpg'; // Adjust path based on your folder structure

const Login = () => {
  const [username, setUsername] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', { username, mobile, password });
      const { token } = response.data; // Extract token from response
      localStorage.setItem('token', token); // Store token in localStorage
      alert("Login successful");
      navigate('/vote'); // Redirect to the voting page after login
    } catch (error) {
      console.error(error);
      alert("Login failed: " + (error.response?.data?.message || "Please try again."));
    }
  };

  return (
    <div className="login-page">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="login-container">
        <h1>Login</h1>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label>Username:</label>
            <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Mobile:</label>
            <input type="text" name="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
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
