import React from "react";
import "../styles/App.scss";
import hardygrove from "../assets/hardygrove.png";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="foot-container">
        <img src={hardygrove} id="foot-logo" alt="" />
        <div className="social-flexbox">
          <p>Connect With Us</p>
          <div className="foot-social">
            <ul className="flex-them">
              <li>
                <a href="#">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
