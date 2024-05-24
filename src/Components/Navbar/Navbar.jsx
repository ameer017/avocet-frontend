import React from "react";
import "./Navbar.css";
import logo from "/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <Link to="/">
        <img src={logo} alt="" className="logo" />
      </Link>
      <div className="nav-right">
        <Link to="/about">About</Link>
        <Link to="/token">EarthFi</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/order-creation">Create</Link>
        <Link to="/buy-asset">Buy Asset</Link>
      </div>
    </div>
  );
};

export default Navbar;
