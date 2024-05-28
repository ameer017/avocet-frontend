import React from "react";
import "./Navbar.css";
import logo from "/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (

    <nav className="navbar" ref={navbarRef}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={home}>
          <img src={logo} alt="Logo" />
        </div>

        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          {lists.map(({ tag, path }, i) => (
            <Link to={path} key={i}>
              {tag}
            </Link>
          ))}
          <ul>
            <li className="dropdown">
              <a href="#" className="dropbtn">
                Pages
              </a>
              <div className="dropdown-content">
                {dropDownList.map(({ tag, path }, i) => (
                  <>
                    <Link to={path} key={i}>
                      {tag}
                    </Link>
                  </>
                ))}
              </div>
            </li>
          </ul>
        </div>

        <button className="--btn --btn-success btn" onClick={launch}>
          Expired Connect Wallet
        </button>

        <div className="navbar-toggle" onClick={toggleNavbar}>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
        </div>

    </div>
    </nav>
  );
};

export default Navbar;
