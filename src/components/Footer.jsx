// Footer.js
import React from "react";
import { Link } from "react-router-dom";
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
                <Link to="/#courses">Courses</Link>
              </li>
              <li>
                <Link to="/instructors">Instructors</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Legal</h3>
            <ul>
              <li>
                <Link to="/terms">Terms of Use</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/cookie">Cookie Preferences</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Connect</h3>
            <ul className="social-links">
              <li>
                <a href="https://facebook.com" className="social-icon">
                  <img src={facebookIcon} alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="https://x.com" className="social-icon">
                  <img src={xIcon} alt="X" />
                </a>
              </li>
              <li>
                <a href="https://instagram.com" className="social-icon">
                  <img src={instagramIcon} alt="Instagram" />
                </a>
              </li>
              <li>
                <a href="https://youtube.com" className="social-icon">
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
