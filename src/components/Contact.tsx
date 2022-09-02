import React from "react";
import "../styles/Contact.scss";
import Navbar from "./Navbar";
import Footer from "./Footer";
import contact from "../assets/contact.jpg";
import { useAppDispatch } from "../app/hooks";
import { useAppSelector } from "../app/hooks";

const Contact = () => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <Navbar />
      <img src={contact} alt="contact us" className="heading-contact" />
      <div className="heading-title">
        <div className="heading-contact-text">Contact Us</div>
      </div>
      <div className="contact-container">
        <h1 className="info">Contact Information</h1>
        <p className="information-fit">
          The Hardy Grove is located on Castlebar Road, deep within the
          beautiful and enchanting Connemara region and outside of Westport in
          County Mayo. We are also located within minutes walking distance from
          Westport, a beautiful city with loads to see and do. Ample parking is
          available when you find our crest!
        </p>
        <div className="info-flex">
          <div className="cards">
            <h1 className="info">Location</h1>
            <p>Castlebar Rd</p>
            <p>Westport, County Mayo, Ireland</p>
            <p>00 353 123 4567</p>
          </div>
          <div className="cards">
            <h1 className="info">Hours</h1>
            <p>Monday, Tuesday, Wednesday:</p>
            <p>11:00AM - 10:00PM</p>
            <p>Thursday, Friday, Saturday, Sunday:</p>
            <p>11:00AM - 12:00AM</p>
          </div>
        </div>
      </div>
      <div>
        <iframe
          height="600"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Castlebar%20Rd,%20Westport,%20Ireland+(The%20Hardy%20Grove)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.maps.ie/distance-area-calculator.html">
            measure acres/hectares on map
          </a>
        </iframe>
      </div>
      <div className="signup-container">
        <h2 id="signup">
          Sign up with your email address to receive news and updates!
        </h2>
        <div className="input-container">
          <input type="email" />
          <input type="button" value="Sign Up" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
