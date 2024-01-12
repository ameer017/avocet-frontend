import React from "react";
import Link from "next/link";

// INTERNAL IMPORTS
import Style from "./Discover.module.css";

const Discover = () => {
  // .....DISCOVER NAVIGATION MENU
  const discover = [
    {
      name: "Collection",
      link: "collection",
    },
    {
      name: "Search",
      link: "searchPage",
    },
    {
      name: "Author Profile",
      link: "author",
    },

    {
      name: "Account Setting",
      link: "account",
    },
    {
      name: "Upload NFT",
      link: "upload",
    },

    {
      name: "Blog",
      link: "blog",
    },
    {
      name: "Seller's Page",
      link: "seller", //This will be linked to FollowerTab
    },
  ];

  return (
    <div>
      {discover.map((el, i) => (
        <div key={i + 1} className={Style.discover}>
          <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Discover;
