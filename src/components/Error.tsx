import React from "react";
import "../styles/App.scss";
import pattern from "../assets/pattern.png";

const Error = () => {
  return (
    <div className="error-flex">
      <img src={pattern} alt="knot pattern" />
      <h1 id="error-head">404 ERROR</h1>
      <p id="error-text">This page does not exist.</p>
      <img src={pattern} alt="knot pattern" />
    </div>
  );
};

export default Error;
