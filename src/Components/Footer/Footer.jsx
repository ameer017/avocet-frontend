import React from "react";
import "./Footer.scss";
import { BsTwitterX, BsEnvelopeOpen } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../../../public/logo-no-background.png";

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
          <div>
            <img src={logo} alt="Logo" className="f__logo" />
            <p className="--flex-para">We leverage blockchain technology to revolutionize waste collection, recycling, <br/> and disposal  services. Our decentralized facilities and smart contract-based <br/> systems ensure transparent, efficient, and environmentally <br/> responsible waste management practices.</p>
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

            <div className="--flex-center gap-2px">
              <a href="mailto:team@earthfi.xyz">
                <BsEnvelopeOpen />
              </a>

              <a href="https://twitter.com/EarthFi" target="__blank">
                <BsTwitterX />
              </a>
            </div>
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
