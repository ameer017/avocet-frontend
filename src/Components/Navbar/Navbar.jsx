import React, { useState } from "react";
import "./Navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import { BsTwitterX, BsInstagram } from "react-icons/bs";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <div className="top-nav">
        <div>
          <Link to="/">
            <img src="/avocet-high-resolution-logo.png" />
          </Link>
        </div>

        <div className="menu" onClick={toggleMenu}>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
        </div>
        <div
          className={`menu-close ${menuVisible ? "visible" : ""}`}
          onClick={toggleMenu}
        >
          <div className="menu-line"></div>
          <div className="menu-line"></div>
        </div>
      </div>
      <div
        className={`menu-background ${menuVisible ? "visible" : ""}`}
        onClick={toggleMenu}
      ></div>
      <div className={`menu-panel text-center ${menuVisible ? "show" : ""}`}>
        <div className="menu-links">
          <Link to="/">HOME</Link>
          <Link to="/">ABOUT</Link>
          <Link to="/">API</Link>
          <Link to="/">DOCs</Link>
          <Link to="/">TEAM</Link>
          <button className="--btn --btn-secondary">WHITE PAPER</button>
          <button className="--btn --btn-secondary">CONNECT WALLET</button>
          <hr />
          <hr />

          <div>
            <Link to="/">
              <BsTwitterX />
            </Link>
            <Link to="/">
              <BsInstagram />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
