import React from "react";
import Link from "next/link";

// INTERNAL IMPORTS
import Style from "./Discover.module.css";

const Discover = () => {
  // .....DISCOVER NAVIGATION MENU
  const discover = [
    {
      name: "Collection",
      link: "collection"
    },
    {
      name: "Author Profile",
      link: "author-profile"
    },
    {
      name: "Account Setting",
      link: "account-setting"
    },
    {
      name: "Blog",
      link: "blog"
    },
  ];

  return (
    <div>
      {discover.map((el, i) => (
        <div key={i + 1} className={Style.discover}>
          <Link href={{pathname: `${el.link}`}}>{el.name}</Link>
        </div>
      ))}
    </div>
  )
};

export default Discover;