import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link for navigation
import axios from 'axios'; // Import axios for API requests
import './Signup.css'; 

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    adharNo: '',
    mobileNumber: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('api/users/signup', formData);
      console.log(response.data.message); // Display success message
      navigate('/login'); // Redirect to login after successful signup
    } catch (error) {
      console.error(error);
      alert("Signup failed: " + (error.response?.data?.message || "Please try again."));
    }
  };

  return (
    <div className="signup-container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Adhar No:</label>
          <input
            type="text"
            name="adharNo"
            value={formData.adharNo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Mobile Number:</label>
          <input
            type="text"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email ID:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? 
        <Link to="/login" className="login-button"> Log In</Link>
      </p>
    </div>
  );
};

export default Signup;
