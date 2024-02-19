import React, { useState } from "react";
import "./Navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import { BsTwitterX, BsInstagram } from "react-icons/bs";

const lists = [
  // { tag: "Color Mode", id: "#color-mode", isColorMode: true },
  { tag: "About", id: "#about" },
  { tag: "API", id: "#projects" },
  { tag: "Subscribe", id: "#services" },
  { tag: "Avocoin", id: "#contact" },
  { tag: "Profile", id: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const home = () => {
    navigate("/");
  };
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/public/whitepaper.pdf";
    link.download = "whitepaper.pdf";
    link.click();
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo" onClick={home}>
            <img src="/avocet-high-resolution-logo.png" />
          </div>

          <div className={`navbar-links ${isOpen ? "active" : ""}`}>
            {lists.map(({ tag, id }) => (
              <a href={id}>{tag}</a>
            ))}
          </div>

          <button
            onClick={handleDownload}
            className="--btn --btn-success btn"
            target="_blank"
          >
            whitepaper
          </button>

          <div className="navbar-toggle" onClick={toggleNavbar}>
            <span className={`bar ${isOpen ? "open" : ""}`}></span>
            <span className={`bar ${isOpen ? "open" : ""}`}></span>
            <span className={`bar ${isOpen ? "open" : ""}`}></span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
