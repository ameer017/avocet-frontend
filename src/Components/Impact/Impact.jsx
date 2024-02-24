import React from "react";
import "./Impact.scss";
import { useNavigate } from "react-router-dom";

const Impact = () => {
  const navigate = useNavigate();
  const about = () => {
    navigate("/get-started");
  };
  return (
    <section className="impact --flex-between">
      <div className="__wrapper">
        <h1>Making A Positive Impact.</h1>
        <button className="--btn" onClick={about}>
          Learn More
        </button>
        <img src="https://images.pexels.com/photos/5842181/pexels-photo-5842181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      </div>

      <div className="--wrapper">
        <div>
          <p>Environmental Impact</p>
          <ul>
            <li>Improved recycling infrastructure.</li>
            <li>New recycling points.</li>
            <li>Greater recovery and recycling capabilities.</li>
            <li>Cleaner environment.</li>
          </ul>
        </div>
        <div>
          <p>Social Impact</p>
          <ul>
            <li>Dignified working opportunities.</li>
            <li>Empowerment of individuals in the workforce.</li>
            <li>Education and workshops.</li>
          </ul>
        </div>
        <div>
          <p>Community Impact</p>
          <ul>
            <li>Achieve sustainability goals.</li>
            <li>Easily showcase impact.</li>
            <li>Attract new customers.</li>
            <li>New source of revenue.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Impact;
