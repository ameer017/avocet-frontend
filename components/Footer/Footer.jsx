import React from 'react'

// INTERNAL IMPORT
import Style from "./Footer.module.css"

import React from "react";
import {
  TiSocialTwitter,
} from "react-icons/ti";
import { RiSendPlaneFill } from "react-icons/ri";
import { GrInstagram } from "react-icons/gr";

//INTERNAL IMPORT
import Style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={Style.footer}>
      <div className={Style.footer_box}>
        <div className={Style.footer_box_social}>
          <h1>AVOCET.</h1>
          <p>
            Engage in our Web3 Waste-to-Wealth platform: tokenize waste
            alongside the largest digital marketplace for NFTs. Buy, sell, and
            explore exclusive digital items while transforming waste into
            valuable tokens.
          </p>
        </div>

        <div className={Style.footer_box_discover}>
          <h3>Discover</h3>
          {/* <Discover /> */}
        </div>

        <div className={Style.footer_box_help}>
          <h3>Help Center</h3>
          {/* <HelpCenter /> */}
        </div>

        <div className={Style.subscribe}>
          <h3>Follow us:</h3>

          <div className={Style.footer_social}>
            <a href="#">
              <TiSocialTwitter />
            </a>
            <a href="#">
              <GrInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
