// Footer.js
import React from "react";
import "./Footer.css";

import facebookIcon from "../icons/facebook.svg";
import xIcon from "../icons/x.svg";
import instagramIcon from "../icons/instagram.svg";
import youtubeIcon from "../icons/youtube.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>GuitarFlix</h3>
            <p>
              Learn guitar from the world's best instructors, anytime, anywhere.
            </p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="/courses">Courses</a>
              </li>
              <li>
                <a href="/instructors">Instructors</a>
              </li>
              <li>
                <a href="/pricing">Pricing</a>
              </li>
              <li>
                <a href="/faq">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Legal</h3>
            <ul>
              <li>
                <a href="/terms">Terms of Use</a>
              </li>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/cookie">Cookie Preferences</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Connect</h3>
            <ul className="social-links">
              <li>
                <a href="#" className="social-icon">
                  <img src={facebookIcon} alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="#" className="social-icon">
                  <img src={xIcon} alt="X" />
                </a>
              </li>
              <li>
                <a href="#" className="social-icon">
                  <img src={instagramIcon} alt="Instagram" />
                </a>
              </li>
              <li>
                <a href="#" className="social-icon">
                  <img src={youtubeIcon} alt="YouTube" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 GuitarFlix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
