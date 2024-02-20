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
  return (
    <>
      <hr style={{ width: "100%" }} />
      <footer>
        <div className="--flex-between">
          <h1 className="f__logo">AVOCET</h1>

          <div>
            <p>Resources</p>

            <Link>DOCs</Link>
            <Link>Whitepaper</Link>
          </div>
          <div>
            <p>Company</p>
            <Link>About Us</Link>
            <Link>Contact Us</Link>
            <Link>Services</Link>
            <Link>Team</Link>
          </div>
          <div className="__socials">
            <p>Socials</p>
            <Link>
              <BsEnvelopeOpen />
            </Link>
            <Link>
              <BsInstagram />
            </Link>
            <Link>
              <BsTwitterX />
            </Link>
            <Link>
              <SlSocialLinkedin />
            </Link>
          </div>
        </div>

        <div className="--flex-between --pad">
          <p>&copy; {currentTime} All Rights Reserved</p>

          <div>
            <Link to="/">Terms Of Use</Link>
            <Link to="/">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
