import React from "react";
import Image from "next/image";
import { TiSocialTwitter, TiSocialInstagram } from "react-icons/ti";
import { FaBottleWater } from "react-icons/fa";


//INTERNAL IMPORT
import Style from "./collectionProfile.module.css";
import images from "../../img";

const collectionProfile = () => {
  const cardArray = [1, 2, 3, 4];
  return (
    <div className={Style.collectionProfile}>
      <div className={Style.collectionProfile_box}>
        <div className={Style.collectionProfile_box_left}>
        
          <img
            src="https://images.pexels.com/photos/10566514/pexels-photo-10566514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="nft image"
            width={250}
            className={Style.collectionProfile_box_left_img}
          />


          <div className={Style.collectionProfile_box_left_social}>
            <a href="#">
              <TiSocialInstagram />
            </a>

            <a href="#">
              <TiSocialTwitter />
            </a>
          </div>
        </div>

        <div className={Style.collectionProfile_box_middle}>
          <h1>Awesome Collection</h1>
          <p>
            In the heart of the plastic waste recycling reserve, flourishes a
            treasury of more than 1,000 regenerative plastics, where vibrant
            colors serve as emblems of metamorphosis.
          </p>

          <div className={Style.collectionProfile_box_middle_box}>
            {cardArray.map((el, i) => (
              <div
                className={Style.collectionProfile_box_middle_box_item}
                key={i + 1}
              >
                <small>Total price</small>
                <p>${i + 1}95,4683</p>
                <span>+ {i + 2}.11%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default collectionProfile;
