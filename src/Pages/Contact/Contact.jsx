import React from "react";
import "./Contact.scss";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';


const Contact = () => {
  return (
    <section className="___wrapper">
      <Helmet>
        <title>Contact Us - EarthFi</title>
        <meta name="description" content="Get in touch with EarthFi. We're here to answer any questions and help you get involved." />
      </Helmet>
      <div class="container__one">
        <h1>Get In Touch</h1>
        <form action="" method="post">
          <div class="form-group">
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your Name"
            />
          </div>
          <div class="form-group">
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="example@gmail.com"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              id="subject"
              name="subject"
              required
              placeholder="subject"
            />
          </div>
          <div class="form-group">
            <textarea
              id="message"
              name="message"
              required
              cols="10"
              placeholder="input your message here"
            ></textarea>
          </div>
          <div class="form-group">
            <button type="submit" className="--btn --btn-block --btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
