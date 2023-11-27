import React from "react";
import "./Statistics.scss";

const list = [
  {
    id: "Our Mission.",
    info: "Through innovation, technology, and collaboration, we aim to minimize waste, reduce pollution, and promote a circular economy that benefits both the environment and society..",
  },

  {
    id: "How It Works.",
    info: "1. Collection and Sorting: We have established a robust waste collection and sorting system that efficiently gathers plastic waste materials.",
  },

  {
    info: "2. Advanced Recycling Technologies: Our cutting-edge recycling technologies ensure that the waste is processed efficiently, maximizing the recovery of valuable resources",
  },

  {
    id: "Join us today!",
    info: `Ready to be a part of the waste-to-wealth revolution? Sign up with Avocet today and play an active role in transforming waste into opportunities for a better world. Together, let's build a brighter and more sustainable future for generations to come.`,
  },

  {
    info: "3. Sustainable Products: The reclaimed materials are transformed into high-quality, eco-friendly products that find new life in various industries.",
  },

  {
    info: "4. Economic Empowerment: We support and partner with local communities, creating jobs and empowering individuals with sustainable livelihoods.",
  },
];

const Statistics = () => {
  return (
    <section className="container --mt">
      <div className="statistic">
        {list.map(({ id, info }) => (
          <div className="details">
            <h2>{id}</h2>

            <p className="--mt">{info}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
