import React from "react";
import "../styles/Contact.scss";

const Contact = () => {
  return (
    <div>
      <h1 className="header">Contact Us</h1>
      <h1 className="info">Info</h1>
      <p className="information-fit">
        The Hardy is located at 123 McGregor Drive, deep within the beautiful
        and enchanting Connemara region. We are also located within minutes
        walking distance from several Gaeltachs and across the street from
        O'Callihan's. Ample parking is available when you find our sign!
      </p>
      <div className="info-flex">
        <div>
          <h1 className="info">Location</h1>
          <p>123 McGregor Drive</p>
          <p>Mayo, Ireland</p>
          <p>891-123-4567</p>
        </div>
        <div>
          <h1 className="info">Hours</h1>
          <p>Monday, Tuesday, Wednesday:</p>
          <p>11:00AM - 10:00PM</p>
          <p>Thursday, Friday, Saturday, Sunday:</p>
          <p>11:00AM - 12:00AM</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
