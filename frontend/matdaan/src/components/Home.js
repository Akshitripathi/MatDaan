import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Our Application</h1>
      <div className="election-card">
        <h2>Upcoming Election: Local Council Election 2024</h2>
        <p>Join us in shaping our community! The Local Council Election will be held on <strong>November 15, 2024</strong>. Make your voice heard and participate in the decision-making process for your neighborhood.</p>
        <Link to="/instruction">
          <button className="vote-button">Vote Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
