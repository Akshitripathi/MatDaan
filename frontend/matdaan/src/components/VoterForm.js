import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import './VoterForm.css';

const VoterForm = () => {
  const [formData, setFormData] = useState({
    voterId: '',
    state: '',
    city: '',
    pincode: '',
    gender: '',
    age: '',
  });
  const [responseMessage, setResponseMessage] = useState('');

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
      const token = localStorage.getItem('jwtToken'); // Retrieve JWT token from local storage
      const response = await axios.post('/api/voter', formData, {
        headers: {
          Authorization: `Bearer ${token}`, // Attach token to the header
        },
      });
      setResponseMessage(response.data.message); // Set the response message to display to the user
    } catch (error) {
      console.error('Error submitting voter form:', error);
      setResponseMessage(error.response.data.message || 'Error submitting form');
    }
  };

  return (
    <div>
      <h2>Voter Form</h2>
      {responseMessage && <p className="response-message">{responseMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Voter ID:</label>
          <input
            type="text"
            name="voterId"
            value={formData.voterId}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>State:</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Pincode:</label>
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default VoterForm;
