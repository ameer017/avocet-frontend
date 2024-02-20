import React, { useEffect, useState } from "react";
import "./Home.scss";
// import loginImg from "../../assets/login.svg";
import { Link } from "react-router-dom";
import Info from "../Components/Info/Info";
import Partner from "../Components/Partners/Partner";

const WORDS = ["Re-Fi", "Recycling", "Collecting", "Processing"];

const Swapper = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % WORDS.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <span>{WORDS[count]}.</span>;
};

const Home = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero-text --pad">
          <p>
            <span>AVOCET </span> &nbsp; &nbsp;
            <Swapper /> &nbsp; &nbsp;
          </p>

          <p>Explore the world of plastic recycling with ease.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
      <Partner/>
      <Info />
    </div>
  );
};

export default Home;
