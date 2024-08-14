// Hero.js
import React from "react";
import "./Hero.css";
import heroImage from "../images/hero-image.jpeg";

function Hero() {
  return (
    <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-content">
        <h2>Master the Guitar</h2>
        <p>Learn from the world's best instructors</p>
        <button className="cta-button">Start Learning</button>
      </div>
    </div>
  );
}

export default Hero;
