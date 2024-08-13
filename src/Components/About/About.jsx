import React, { useState } from "react";
import "./About.scss";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <section className="hero-home">
      <Helmet>
        <title>About Us - EarthFi</title>
        <meta name="description" content="Learn more about EarthFi, our mission, and our commitment to sustainable finance and environmental stewardship on the blockchain." />
      </Helmet>
      <div className="container">
        <div className="row">
          <h1 className="headerText">EarthFi's Tech explained.</h1>
          <p>
            How we provide innovative solutions that transform waste materials
            into valuable resources.
          </p>

          <Link to="/contact" className="--btn --btn-success">
            CONTACT OUR TEAM
          </Link>
        </div>
      </div>

      {/* The First Card Sec */}
      <div className="tech-block">
        <div className="tech_card">
          <div className="left-box">
            <span className="__label">01 / EarthFi'S Resource Recovery</span>
            <p className="__allPara">
              we facilitate the recovery and repurposing of various waste
              materials, including plastics, organic waste, electronic waste,
              and more
            </p>
          </div>
        </div>

        {/* The Second Card sec */}
        <div className="tech_card2">
          <div className="left-box2">
            <span className="__label2">02 / Waste Management Solutions</span>
            <p className="__allPara">
              We offer a range of waste management services and technologies
              designed to optimize resource utilization and minimize
              environmental impact.
            </p>
          </div>
        </div>

        {/* The Third Card Sec  */}
        <div className="tech_card">
          <div className="left-box">
            <span className="__label">03 / Community Engagement</span>
            <p className="__allPara">
              We engage with local communities to raise awareness about the
              importance of waste reduction and recycling, and to empower
              individuals to take action towards a cleaner, greener future.
            </p>
          </div>
        </div>
      </div>

      {/* The Footer-Header */}
      <div className="__footer-header">
        <h6 >
          Build your nature strategy with EarthFi
        </h6>
        <Link to="/get-started" className="--btn --btn-success">
          GET STARTED
        </Link>
      </div>
    </section>
  );
};

export default About;
