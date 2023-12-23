import React from "react";
import Image from "next/image";
import Style from "./Hero.module.css";
import Button from "../Button/Button";
import images from "../../img";

const Hero = () => {
  return (
    <div className={Style.heroSection}>
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
    </div>
  );
};

export default Hero;
