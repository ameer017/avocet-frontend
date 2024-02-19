import React from "react";
import "./Footer.scss";
import {
  BsTwitterX,
  BsInstagram,
  BsEnvelopeOpen,
  BsTelephone,
} from "react-icons/bs";
import { FaGooglePlusG } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentTime = new Date().getFullYear();
  return (
    <>
      <hr style={{ width: "100%" }} />
      <footer className="--flex-between">
        <div className="--wrapper">
          <img src="/avocet-high-resolution-logo.png" />

          <div className="socials">
            <Link to="/">
              <BsEnvelopeOpen size={25} />
            </Link>
            <Link to="/">
              <BsInstagram size={25} />
            </Link>
            <Link to="/">
              <BsTwitterX size={25} />
            </Link>
          </div>
        </div>

        <div className="--wrapper-two">
          <div className="footer-items">
            <h3>AVOCET</h3>
            <Link>About</Link>
            <Link>Contact</Link>
            <Link>Privacy Policy</Link>
            <Link>Team</Link>
            <Link>Terms And Conditions</Link>
          </div>

          <div className="footer-items">
            <h3>Support</h3>
            <Link>Contact Us</Link>
            <Link>Report An Issue</Link>
          </div>

          <div className="footer-items">
            <h3>Developers</h3>
            <Link>API</Link>
            <Link>Documentation</Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
