import React from "react";
import {
  Card,
  Category,
  Collection,
  Filter,
  FollowerTab,
  Hero,
  Service,
  Slider,
  Subscribe,
  Title,
} from "../components/componentIndex";

//Internally

import Style from "../styles/index.module.css";
const Home = () => {
  return (
    <div>
      <Hero />
      <Service />
      {/* <Slider/> */}
      {/* <Title
        heading="Browse by category."
        paragraph="Explore the listed Plastics in the most featured categories."
      />
      <Category /> */}
      {/* <FollowerTab />  route is inside Discover__Navbar */}
      <Collection />
      <Filter />
      <Card />
      <Subscribe />
    </div>
  );
};

export default Home;
