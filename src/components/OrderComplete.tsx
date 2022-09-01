import React from "react";
import pattern from "../assets/pattern.png";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

const OrderComplete = () => {
  return (
    <div className="complete-flex">
      <h1>Thank you for your order!</h1>
      <h4>We look forward to seeing you at the pub.</h4>
      <img src={pattern} alt="knot pattern" />
      <div className="social-flexbox">
        <p>Connect With Us</p>
        <div>
          <ul>
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
  );
};

export default OrderComplete;
