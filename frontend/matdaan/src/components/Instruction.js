import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Instruction.css';

const Instruction = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate(); // Initialize navigate for routing

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  // Function to handle the continue button click
  const handleContinue = () => {
    if (isChecked) {
      // Navigate to the form page when the checkbox is checked
      navigate('/Voterform'); // Replace '/form' with the actual path of your form component
    }
  };

  return (
    <div className="instruction-container">
      <h2>Voting Instructions</h2>
      <ol>
        <li><strong>Booth Timing:</strong> The booth will remain open for only 7 minutes.</li>
        <li><strong>State and City:</strong> Ensure you have selected the correct state and city before submitting your vote.</li>
        <li><strong>Image Recognition:</strong> Make sure no one else is around while voting. This system uses image recognition to ensure a private voting environment.</li>
        <li><strong>Valid Information:</strong> Please enter all information correctly. Invalid data may lead to your vote not being counted.</li>
        <li><strong>Identification:</strong> Ensure you have your voter ID and personal details ready before voting.</li>
        <li><strong>One Vote Per Person:</strong> Each person is allowed to vote only once. Duplicate votes will be rejected.</li>
      </ol>

      {/* Checkbox */}
      <div className="checkbox-container">
        <input 
          type="checkbox" 
          id="acknowledgment" 
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="acknowledgment">
          I have read all information carefully and understand that if I provide incorrect or fraudulent information, my vote will not be counted.
        </label>
      </div>

      {/* Continue Button */}
      <button 
        type="button" 
        onClick={handleContinue} 
        disabled={!isChecked} 
        className="continue-button"
      >
        Continue
      </button>
    </div>
  );
};

export default Instruction;

