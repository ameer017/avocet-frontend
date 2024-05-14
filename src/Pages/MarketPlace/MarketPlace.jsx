import React, { useEffect, useState } from "react";
import "./MarketPlace.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MarketPlace = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

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

  const handleConfirmPayment = async (itemId) => {
    const confirmed = window.confirm("Have you received the payment?");
    if (confirmed) {
      try {
        const updatedItems = items.map((item) => {
          if (item.id === itemId) {
            return { ...item, orderStatus: "Completed" };
          }
          return item;
        });
        await axios.put(`http://localhost:3500/marketList/${itemId}`, {
          orderStatus: "Completed",
        });
        setItems(updatedItems);
        console.log("Payment confirmed and order status updated to Completed.");
        navigate("/");
      } catch (error) {
        console.error("Error confirming payment:", error);
      }
    }
  };

  return (
    <section>
      <div className="container">
        <h1>MarketPlace</h1>

        <div className="--flex wrapper_mpc">
          {/* displays only orders with status -> "processing" */}
          {items.map(
            ({ id, title, amount, location, orderStatus, weight }, idx) => (
              <div key={idx} className="mpc --p2">
                <div>
                  <p> Title: {title} </p>
                  <p> Amount: {amount} </p>
                  <p> Location: {location} </p>
                  <p> Weight: {weight} kg</p>
                  <p>{orderStatus}! </p>

                  {orderStatus === "Delivered" && (
                    <div className="--mt">
                      <button
                        className="--btn --btn-success"
                        onClick={() => handleConfirmPayment(id)}
                      >
                        Confirm Payment
                      </button>
                    </div>
                  )}
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
