import React from "react";
import "./Footer.scss";
import { FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="app__footer">
      <div className="app__footer-card app__flex footer-contact">
        <h2>contact</h2>
        <ul>
          <li>+91 1234567890</li>
          <li>123 Street, Noida, India</li>
          <li>restro@host.com</li>
        </ul>
      </div>
      <div className="app__footer-card app__flex footer-timing">
        <h2>timings</h2>
        <ul>
          <li>
            monday - saturday <br /> 09:00 AM - 09:00 PM
          </li>
          <li>
            sunday <br /> 11:00 AM - 08:00 PM
          </li>
        </ul>
      </div>
      <div className="app__footer-card app__flex footer-company">
        <h2>company</h2>
        <ul>
          <li>about us</li>
          <li>contact us</li>
          <li>reservation policy</li>
        </ul>
      </div>
      <div className="developer-info">
        <p className="p-text">developed with ❤️ by</p>
        <a
          target="_blank"
          href="https://linkfree.eddiehub.io/Abhijeet-Gautam5702"
        >
          Abhijeet Gautam
        </a>

        <a target="_blank" href="https://github.com/Abhijeet-Gautam5702">
          <FaGithub />
        </a>
        <a target="_blank" href="https://twitter.com/abhijeet_gautam">
          <FaTwitter />
        </a>
      </div>
    </div>
  );
}
