import { NavLink } from "react-router-dom";
import "../styles/Navbar.scss";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const Navbar = (): JSX.Element => {
  const [active, setActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className="navbar" id="top">
      <div className="logo-container">
        <h1>The Hardy Grove</h1>
      </div>
      <div className="closed">
        <GiHamburgerMenu
          className={active ? "menu-icon active" : "menu-icon"}
          onClick={showMenu}
          style={{ color: "white" }}
        />
      </div>
      <div className={active ? "nav-container active" : "nav-container"}>
        <MdClose
          className={active ? "close active" : "close"}
          onClick={showMenu}
        />
        <NavLink to="/">Home</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/order">Order Online</NavLink>
        <NavLink to="/contact">Contact</NavLink>
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
  );
};

export default Navbar;
