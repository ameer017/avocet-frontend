import React, { useEffect, useState } from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import Partner from "../Components/Partners/Partner";
import Impact from "../Components/Impact/Impact";
import Restore from "../Components/Restore/Restore";
import Loader from "../Components/Loader/Loader";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const WORDS = ["Recycling", "Collecting", "Processing"];

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Navbar/>
          <section className="hero">
            <div className="hero-text --pad">
              <p>
                <span>EarthFi </span> &nbsp;
                <Swapper /> &nbsp; &nbsp;
              </p>

              <p>Explore the world of plastic recycling with ease.</p>

              <div className="hero-buttons --flex-start">
                <button className="--btn --btn-success">
                  <Link to="/get-started">Get Started</Link>
                </button>
              </div>
            </div>
          </section>
          <Restore />
          <Impact />
          <Partner />
          <Footer/>
        </div>
      )}
    </div>
  );
};

export default Home;
