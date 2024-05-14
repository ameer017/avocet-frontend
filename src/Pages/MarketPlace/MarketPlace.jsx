import React, { useEffect, useState } from "react";
import "./MarketPlace.scss";
import axios from "axios";

const MarketPlace = () => {
  const [items, setItems] = useState([]);

  // To get the data on the marketPlace, type this command in your terminal: npx json-server -w data/db.json -p 3500

  useEffect(() => {
    axios
      .get("http://localhost:3500/marketList")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <section>
      <div className="container">
        <h1>MarketPlace</h1>

        <div className="--flex wrapper_mpc">
          {/* displays only orders with status -> "processing" */}
          {items.map(
            ({ title, amount, location, orderStatus, weight }, idx) => (
              <div key={idx} className="mpc --p2">
                <div>
                  <p> Title: {title} </p>
                  <p> Amount: {amount} </p>
                  <p> Location: {location} </p>
                  <p> Weight: {weight} kg</p>
                  <p>{orderStatus}! </p>

                  <div className="--mt">
                    {/* to  be rendered for the buyer only */}
                    {/* <button className="--btn --btn-blue">Buy Asset</button> */}
                    {/* to  be rendered for the seller after creating an order --> to confirm payment receipt */}
                    <button className="--btn --btn-success">
                      Confirm Payment
                    </button>
                    {/* to  be rendered for the buyer after receiving the order --> to confirm order receipt */}
                    {/* <button className="--btn --btn-danger">
                      Asset Received
                    </button> */}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default MarketPlace;
