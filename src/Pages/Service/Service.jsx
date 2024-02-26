import React from "react";
import "./Service.scss";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <div>
      <section className="hero_service">
        <div className="service_text">
          <h1>Plastics Recycling</h1>
          <p>
            If your company is generating a large amount of plastic waste, we
            can help <br></br> ensure it’s recycled.
          </p>
        </div>
        <div className="background">
          <div className="content-box">
            <h1>Commercial Plastics Recycling</h1>
            <p>
              We offer plastics recycling services for a variety of grades of
              materials, including films, HDPE or LDPE, shrink wrap, and
              <br></br>polycarbonate. For decades we’ve been committed to
              finding ways to recycle types of plastic that were previously
              <br></br>landfilled.
            </p>
          </div>
        </div>

        <div className="content_section_active">
          <div className="content_section_wrapper">
            <div className="text-section">
              <h2>A Better Way</h2>
              <p className="content_section_subtitle">
                Through our plastics recycling program, our save<br></br>{" "}
                substantially on landfill and transportation costs.
              </p>
              <p className="content_section_description">
                We&apos;ll work with you to ensure that anything that can be<br></br>{" "}
                recycled is. If you bring us unsellable beverages or food, we&apos;ll
                <br></br> separate the packaging, bio-digest the liquids, and
                recycle the<br></br> plastic containers.
              </p>
              <p className="content_section_medium_description">
                We offer plastic recycling services in California, Utah,
                Arizona,<br></br> Nevada, Texas, and Washington.
              </p>
              <button className="btn btn_primary">
                <Link to="/">
                  CONTACT US <span className="arrow">&#8594;</span>
                </Link>
              </button>
            </div>
            <div className="image-section">
              <img
                className="img_para"
                src="https://images.pexels.com/photos/5842181/pexels-photo-5842181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Your Image"
              />
            </div>
          </div>
        </div>

        <div className="__para_title">
          <h3>
            Let’s Get your Team<br></br> Closer to Zero Waste
          </h3>
          <p className="__para_text">
            We'll work with your company to maximize what you<br></br> recycle
            and achieve your sustainability goals.
          </p>

          <button className="btn btn_primary">
            <Link to="/">
              CONTACT US <span className="arrow">&#8594;</span>
            </Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Service;


