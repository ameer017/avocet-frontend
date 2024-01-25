import React, { useState, useEffect } from "react";

// INTERNAL IMPORT
import Style from "../styles/author.module.css";
import { Banner, CardTwo } from "../collectionPage/collectionIndex";
import { Title } from "../components/componentIndex";
import images from "../img";
import {
  AuthorProfileCard,
  AuthorTaps,
  AuthorCardBox,
} from "../authorPage/componentIndex";
import FollowerTabCard from "../sellerPage/FollowerTab/FollowerTabCard/FollowerTabCard";

const author = () => {
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

  const [collectibles, setCollectibles] = useState(true);
  const [created, setCreated] = useState(false);
  const [like, setLike] = useState(false);
  const [follower, setFollower] = useState(false);
  const [following, setFollowing] = useState(false);

  return (
    <div className={Style.Banner}>
      <Banner bannerImage={images.creatorbackground2} />
      <AuthorProfileCard />
      <AuthorTaps
        setCollectibles={setCollectibles}
        setCreated={setCreated}
        setLike={setLike}
        setFollower={setFollower}
        setFollowing={setFollowing}
      />

      <AuthorCardBox
        collectibles={collectibles}
        created={created}
        like={like}
        follower={follower}
        following={following}
      />

      <Title
        heading="Popular Creators"
        paragraph="Click on music icon and enjoy NTF music or audio"
      />
      <div className={Style.author_box}>
        {followerArray.map((el, i) => (
          <FollowerTabCard i={i} el={el} />
        ))}
      </div>
    </div>
  );
};

export default author;
