import React, { useState, useEffect } from "react";
import "./Home.scss";
import Loader from "../../components/loader/Loader";
import { CiTwitter } from "react-icons/ci";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Statistics from "../statistics/Statistics";
import Product from "../product/Product";
import AppInner from "../app-inner/AppInner";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Partner from "../statistics/Partner";
import { ShowOnLogout } from "../../components/protect/hiddenLink";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          {/* <Navbar/> */}
          {/* hero section */}

          <section className=" hero">
            <div className="hero-text">
              <h1>
                AVOCET <span className="headingBig">SOLUTIONS</span>.
              </h1>

              {/* <small>...Tokenizing Waste through Web3</small> */}

              <p>
                Your gateway to a sustainable future. We are a waste-to-wealth platform committed to revolutionizing the way we handle waste and turning it into valuable resources.
              </p>

              <div className="hero-buttons --flex-start">
                <ShowOnLogout>
                  <button className="--btn --btn-secondary center">
                    <Link to="/get-started">Get Started</Link>
                  </button>
                </ShowOnLogout>
              </div>

              <div>
                <a href='https://twitter.com/avocet816589' target='_blank'>
                  <CiTwitter size={30} color="#fff" className="color-change"/>
                </a>
                <a href="https://github.com/ameer017/avocet-frontend" target="_blank">
                  <FaGithub size={30} color="#fff" className="color-changeOne"/>
                </a>
                <a href="https://wa.link/whld03" target="_blank">
                  <FaWhatsapp size={30} color="#fff" className="color-changeTwo"/>
                </a>
              </div>

              {/* <Partner/> */}
            </div>
          </section>
          <Statistics />
          <hr />

          <Product />
          <AppInner />

          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
