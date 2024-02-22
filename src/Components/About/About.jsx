import React, { useState } from "react";
import "./About.scss";

const About = () => {
  return (
    <section className="hero-home">
      <div className="container">
        <div className="row">
          <h1 className="headerText">Avocet's tech explained.</h1>
          <p>
            How earth observation and artificial intelligence can drive the next
            generation of investments in nature.
          </p>
          <ul className="btn-group">
            <l1>
              <a href="" className="btn ">
                CONTACT OUR TEAM
              </a>
            </l1>
          </ul>
        </div>
      </div>
        {/* The First Card Sec */ }
      <div className="tech-block">
        <div className="tech_card">
          <div className="left-box">
            <span className="__label">01 / AVOCET'S CORE TECHNOLOGY</span>
            <h2>Building a modern, scalable carbon market</h2>

            <ul className="btn-group2">
              <l1>
                <a href="" className="btn2 ">
                  EXPAND
                </a>
              </l1>
            </ul>
          </div>
        </div>

        {/* The Second Card sec */ }
        <div className="tech_card2">
          <div className="left-box2">
            <span className="__label2">02 / AVOCET'S CORE TECHNOLOGY</span>
            <h3>Building a modern, scalable carbon market</h3>

            <ul className="btn-group3">
              <l1>
                <a href="" className="btn3 ">
                  EXPAND
                </a>
              </l1>
            </ul>
          </div>
        </div>

        {/* The Third Card Sec  */}
        <div className="tech_card_four">
          <div className="left-box4">
            <span className="__label_four">03 / AVOCET'S CORE TECHNOLOGY</span>
            <h5>Building a modern, scalable carbon market</h5>

            <ul className="btn-group_four">
              <l1>
                <a href="" className="btn4">
                  EXPAND
                </a>
              </l1>
            </ul>
          </div>
        </div>
      </div>

      {/* The SignUp Sec  */ }
      <div className="sign-up">
        <div class="flex-container">
          <h4>Sign up to our newsletter</h4>
          <input type="email" placeholder="Enter your email" />
        </div>

        <div class="flex-container">
          <p>Stay updated with Pachama’s news and guides,zero spam,promise.</p>
          <button style={{ backgroundColor: "green" }}>DOWNLOAD</button>
        </div>
      </div>

      {/* The Footer-Header */ }
      <div className="__footer-header">
        <h6 style={{ fontSize: "4rem" }}>
          Build your nature strategy with Avocet
        </h6>
        <button className="__footer-btn">GET STARTED</button>
      </div>
    </section>
  );
};

export default About;
