import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
  return (
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/Profile">Profile</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/UserGuide">UserGuide</Link>
      <Link to="/Partylist">PartyList</Link>
      <Link to="/Analysis">Analysis</Link>
      <Link to="/Result">Result</Link>
    </nav>
  );
}

export default Navbar;
