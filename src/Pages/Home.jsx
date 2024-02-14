import React, { useEffect, useState } from "react";
import "./Home.scss";
// import loginImg from "../../assets/login.svg";
import { Link } from "react-router-dom";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
      setTimeout(() => {
        setIsLoading(false)
      }, 5000)
  }, [])

  return (
    <div>
      <section className="hero">
        <div className="hero-text --pad">
          <h2>AVOCET - <span>ReFi</span></h2>
          <p>
            Explore the world of plastic recycling with ease.
          </p>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="hero-buttons --flex-start">
            <button className="--btn --btn-success">
              <Link to="/register">Get Started</Link>
            </button>
            <button className="--btn --btn-primary">
              <Link to="/login">Connect Wallet</Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
