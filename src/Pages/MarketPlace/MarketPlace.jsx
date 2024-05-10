import React from "react";
import "./MarketPlace.scss";

// const marketList = [
//   {
//     title: "HDPE",
//     amount: 100,
//     location: "Ajah, Lagos",
//     orderStatus: "Processing",
//     weight: 100,
//   },
//   {
//     title: "PET",
//     amount: 20,
//     location: "Ajah, Lagos",
//     orderStatus: "Processing",
//     weight: 100,
//   },
//   {
//     title: "PDE",
//     amount: 10,
//     location: "Ajah, Lagos",
//     orderStatus: "Processing",
//     weight: 100,
//   },

//   {
//     title: "PDE",
//     amount: 10,
//     location: "Ajah, Lagos",
//     orderStatus: "Processing",
//     weight: 100,
//   },
// ];

const MarketPlace = ({items}) => {
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

                  <div className="--flex --mt">
                    {/* to  be rendered for the buyer only */}
                    <button className="--btn --btn-blue">Buy Asset</button>
                    {/* to  be rendered for the seller after creating an order --> to confirm payment receipt */}
                    <button className="--btn --btn-success">
                      Confirm Payment
                    </button>
                    {/* to  be rendered for the buyer after receiving the order --> to confirm order receipt */}
                    <button className="--btn --btn-danger">
                      Asset Received
                    </button>
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
