import React from "react";
import pattern from "../assets/pattern.png";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";

const OrderComplete = () => {
  return (
    <div className="complete-flex">
      <Navbar />
      <div className="thanks-container">
        <h1 id="thanks">Thank you for your order!</h1>
        <h4>
          We look forward to seeing you at the pub. Your order should be ready
          for pickup soon.
        </h4>
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
        <Footer />
      </div>
    </div>
  );
};

export default OrderComplete;
