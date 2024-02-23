import React from "react";
import "./Contact.scss";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="___wrapper">
      <div class="container__one">
        <h1>Get In Touch</h1>
        <form action="" method="post">
          <div class="form-group">
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="John Doe"
            />
          </div>
          <div class="form-group">
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="yourname@gmail.com"
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
