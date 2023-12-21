import React from "react";
import { Hero, Service, Slider, Subscribe } from "../components/componentIndex";

//Internally

import Style from "../styles/index.module.css";
const Home = () => {
  return (
    <div>
      <Hero />
      <Service />
      {/* <Slider/> */}
      <Subscribe />
    </div>
  );
};

export default Home;
