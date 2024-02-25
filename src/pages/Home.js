import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Home.css';
import profileImage from '../assets/images/Profile1.jpg';

function Home() {
  const navigate = useNavigate();

  const navigateToAbout = () => {
    navigate('/about');
  };

  return (
    <div className="home-background">
      <div className="profile-container">
        <div className="profile-text">
          <h1 className="greeting-text">Hi there!</h1>
          <p className="intro-text">Welcome to my portfolio. Are you interested in learning more about me and my journey? Let's move forward together.</p>
          <button className="explore-button" onClick={navigateToAbout}>
            About Me
          </button>
        </div>
        <div className="profile-image">
          <img src={profileImage} alt="Profile" className="profile-photo" style={{ width: '400px', height: '400px' }} />
        </div>
      </div>
    </div>
  );
}

export default Home;
