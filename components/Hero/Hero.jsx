import React from "react";
import Image from "next/image";
import Style from "./Hero.module.css";
import Button from "../Button/Button";
import images from "../../img";
import { FaCanadianMapleLeaf } from "react-icons/fa";

const Hero = () => {
  return (
    <div className={Style.heroSection}>
      <div className={Style.leaf}>
        <FaCanadianMapleLeaf color="green" size={40} />
      </div>

      <div className={Style.heroSection_box}>
        <h1 className={Style.head}>
          AVOCET <span className={Style.headingBig}>SOLUTIONS.</span>
        </h1>
        <p>
          Your gateway to a sustainable future. We are a waste-to-wealth
          platform committed to revolutionizing the way we handle waste and
          turning it into valuable resources.
        </p>

        <Button btnName="Get Started" />
      </div>
        <div className={Style.leaf}>
          <FaCanadianMapleLeaf color="white" size={40} />
        </div>
    </div>
  );
};

export default Hero;
