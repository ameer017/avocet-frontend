import React from "react";
import "./Service.scss";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';


const Service = () => {
  return (
    <div>
      <Helmet>
        <title>Our Services - EarthFi</title>
        <meta name="description" content="Discover the services EarthFi offers to promote environmental sustainability through blockchain technology." />
      </Helmet>
      <section className="hero_service">
        <div className="service_text">
          <h1>Plastic Recycling.</h1>
          <p>
            Incorporate blockchain technology to ensure the efficient recycling{" "}
            <br />
            of large volumes of plastic waste generated by your company.
          </p>
        </div>
        <div className="background">
          <div className="content-box">
            <h1>Commercial Plastics Recycling</h1>
            <p>
              We offer plastics recycling services for a variety of grades of
              plastic waste materials, including PET bottles, HDPE or LDPE.
              <br></br>For decades we&apos;ve been committed to finding ways to
              recycle types of plastic that were previously landfilled.
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
                We&apos;ll work with you to ensure that anything that can be
                <br></br> recycled is. If you bring us unsellable beverages or
                food, we&apos;ll
                <br></br> separate the packaging, bio-digest the liquids, and
                recycle the<br></br> plastic containers.
              </p>

              <button className="--btn --btn-primary">
                <Link to="/contact" className="--btn --btn-primary">
                  CONTACT US <span className="arrow">&#8594;</span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
