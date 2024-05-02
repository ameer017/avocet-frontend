import React, { useState } from "react";
import "./About.scss";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="hero-home">
      <div className="container">
        <div className="row">
          <h1 className="headerText">Avocet's Tech explained.</h1>
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
            <span className="__label">01 / AVOCET'S Resource Recovery</span>
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
        <h6 style={{ fontSize: "4rem" }}>
          Build your nature strategy with Avocet
        </h6>
        <Link to="/get-started" className="--btn --btn-success">
          GET STARTED
        </Link>
      </div>
    </section>
  );
};

export default About;
