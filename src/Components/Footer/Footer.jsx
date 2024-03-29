import React from "react";
import "./Footer.scss";
import {
  BsTwitterX,
  BsInstagram,
  BsEnvelopeOpen,
  BsTelephone,
} from "react-icons/bs";
import { SlSocialLinkedin } from "react-icons/sl";

import { FaGooglePlusG } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentTime = new Date().getFullYear();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/public/whitepaper.pdf";
    link.download = "whitepaper.pdf";
    link.click();
  };
  return (
    <>
      <hr style={{ width: "100%" }} />
      <footer>
        <div className="--flex-between">
          <h1 className="f__logo">AVOCET</h1>

          <div className="res">
            <p>Resources</p>

            <button onClick={handleDownload} className="--btn">
              Whitepaper
            </button>
          </div>
          <div>
            <p>Company</p>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/service">Service</Link>
            <Link to="/team">Team</Link>
          </div>
          <div className="__socials">
            <p>Socials</p>
            <a href="mailto:avocet907@gmail.com">
              <BsEnvelopeOpen />
            </a>

            <a href="https://twitter.com/avocet816589">
              <BsTwitterX />
            </a>
            <a href="#">
              <SlSocialLinkedin />
            </a>
          </div>
        </div>

        <div className="--flex-between --pad">
          <p>&copy; {currentTime} All Rights Reserved</p>

          <div>
            <Link to="/terms">Terms Of Use</Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
