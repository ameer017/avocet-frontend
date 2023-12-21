import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./Subscribe.module.css";
import images from "../../img";

const Subscribe = () => {
  return (
    <div className={Style.subscribe}>
      <div className={Style.subscribe_box}>
        <div className={Style.subscribe_box_left}>
          <h2>A chance not to miss?</h2>
          <p>
            Subscribe! Be the first to discover new orders, ensuring you never miss a chance to contribute to transforming waste into valuable resources.
          </p>
          <div className={Style.subscribe_box_left_box}>
            <span>01</span>
            <small>Get more offers.</small>
          </div>
          <div className={Style.subscribe_box_left_box}>
            <span>02</span>
            <small>Be in the know!</small>
          </div>

          <div className={Style.subscribe_box_left_input}>
            <input type="email" placeholder="yourname@gmail.com" />
            <RiSendPlaneFill className={Style.subscribe_box_left_input_icon} />
          </div>
        </div>

        <div className={Style.subscribe_box_right}>
          <Image
            src={images.update}
            alt="get update"
            height={600}
            width={800}
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
