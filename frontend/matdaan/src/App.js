import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile';
import UserGuide from './components/UserGuide';
import Analysis from './components/Analysis';
import Result from './components/Result';
import Signup from './components/Signup';
import Login from './components/Login';
import ContactUs from './components/ContactUs';
import Partylist from './components/Partylist';
import VoterForm from './components/VoterForm';
import Instruction from './components/Instruction';
// import Contact from './components/ContactUs';

const App = () => {
  return (
    <div>
      <Router>
        <ConditionalNavbar />
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Contact" element={<ContactUs />} />
          <Route path="/UserGuide" element={<UserGuide />} />
          <Route path="/Partylist" element={<Partylist />} />
          <Route path="/Analysis" element={<Analysis />} />
          <Route path="/Result" element={<Result />} />
          <Route path="/login" element={<Login />} />
          <Route path="/voterForm" element={< VoterForm/>} />
          <Route path="/instruction" element={< Instruction/>} />
        </Routes>
      </Router>
    </div>
  );
}

const ConditionalNavbar = () => {
  const location = useLocation();
  const noNavbarPaths = ["/", "/login"];
  return !noNavbarPaths.includes(location.pathname) ? <Navbar /> : null;
}

export default App;