import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./Card.module.css";
import images from "../../img";

const Card = () => {
  const featureArray = [1, 2, 3];

  const [like, setLike] = useState(true);

  const likePro = () => {
    if (!like) {
      setLike(true);
    } else {
      setLike(false);
    }
  };

  return (
    <div className={Style.card}>
      {featureArray.map((el, i) => (
        <div className={Style.card_box} key={i + 1}>
          <div className={Style.card_box_img}>
            {/* <Image
              src={images.nft_image_1}
              alt="NFT images"
              width={600}
              height={600}
              className={Style.card_box_img_img}
            /> */}
          </div>

          <div className={Style.card_box_update}>
            <div className={Style.card_box_update_left}>
              <div
                className={Style.card_box_update_left_like}
                onClick={() => likePro()}
              >
                {like ? (
                  <AiOutlineHeart />
                ) : (
                  <AiFillHeart
                    className={Style.card_box_update_left_like_icon}
                  />
                )}
                {""} 22
              </div>
            </div>

            <div className={Style.card_box_update_right}>
              <div className={Style.card_box_update_right_info}>
                <small>Remaining time</small>
                <p>3h:15m:20s</p>
              </div>
            </div>
          </div>

          <div className={Style.card_box_update_details}>
            <div className={Style.card_box_update_details_price}>
              <div className={Style.card_box_update_details_price_box}>
                <h4>Clone #17373</h4>

                <div className={Style.card_box_update_details_price_box_box}>
                  <div className={Style.card_box_update_details_price_box_bid}>
                    <small>Current Bid</small>
                    <p>1.000ETH</p>
                  </div>
                  <div
                    className={Style.card_box_update_details_price_box_stock}
                  >
                    <small>61 in stock</small>
                  </div>
                </div>
              </div>
            </div>
            <div className={Style.card_box_update_details_category}>
              <BsImages />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
