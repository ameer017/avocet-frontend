import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../public/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");

  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  const closeSidebar = () => {
    setActive("nav__menu");
    setIcon("nav__toggler");
  };

  return (
    <nav className="nav">
      <Link to="/">
        <img src={logo} alt="" width={100} onClick={closeSidebar} />
      </Link>

      <ul className={active}>
        <li className="nav__item">
          <Link to="/about" className="nav__link" onClick={closeSidebar}>
            About
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/token" className="nav__link" onClick={closeSidebar}>
            EarthFi
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/profile" className="nav__link" onClick={closeSidebar}>
            Profile
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="/order-creation"
            className="nav__link"
            onClick={closeSidebar}
          >
            Create
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/buy-asset" className="nav__link" onClick={closeSidebar}>
            Buy
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/market-place" className="nav__link" onClick={closeSidebar}>
            Market-Place
          </Link>
        </li>
      </ul>

      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line1"></div>
        <div className="line1"></div>
      </div>
    </nav>
  );
};

export default Navbar;
