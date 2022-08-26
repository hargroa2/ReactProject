import React from "react";
import { Link } from "react-router-dom";
import "../App.scss";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/order">Order Online</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Navbar;
