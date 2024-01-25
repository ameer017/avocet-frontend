import React, { useState } from "react";

//INTERNAL IMPORT
import Style from "./AuthorCardBox.module.css";
import images from "../../img";
import { CardTwo } from "../../collectionPage/collectionIndex";
import FollowerTabCard from "../../sellerPage/FollowerTab/FollowerTab";

const AuthorCardBox = ({
  collectibles,
  created,
  like,
  follower,
  following,
}) => {
  const collectiblesArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
  ];

  const createdArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
  ];

  const likeArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
  ];

  const followerArray = [
    {
      background: images.creatorbackground1,
      user: images.avatar,
    },
    {
      background: images.creatorbackground2,
      user: images.avatar,
    },
    {
      background: images.creatorbackground3,
      user: images.avatar,
    },
    {
      background: images.creatorbackground4,
      user: images.avatar,
    },
    {
      background: images.creatorbackground5,
      user: images.avatar,
    },
    {
      background: images.creatorbackground6,
      user: images.avatar,
    },
  ];

  const followingArray = [
    {
      background: images.creatorbackground3,
      user: images.avatar,
    },
    {
      background: images.creatorbackground4,
      user: images.avatar,
    },
    {
      background: images.creatorbackground5,
      user: images.avatar,
    },
    {
      background: images.creatorbackground6,
      user: images.avatar,
    },
    {
      background: images.creatorbackground1,
      user: images.avatar,
    },
  ];
  return (
    <div className={Style.AuthorNFTCardBox}>
      {collectibles && <CardTwo NFTData={collectiblesArray} />}
      {created && <CardTwo NFTData={createdArray} />}
      {like && <CardTwo NFTData={likeArray} />}
      {follower && (
        <div className={Style.AuthorNFTCardBox_box}>
          {followerArray.map((el, i) => (
            <FollowerTabCard i={i} el={el} />
          ))}
        </div>
      )}
      {following && (
        <div className={Style.AuthorNFTCardBox_box}>
          {followingArray.map((el, i) => (
            <FollowerTabCard i={i} el={el} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AuthorCardBox;
