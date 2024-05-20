import React, { useEffect, useState } from "react";
import "./MarketPlace.scss";
import { useNavigate } from "react-router-dom";

const MarketPlace = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("orders")) || [];
    setItems(storedItems);
  }, []);

  const handleConfirmPayment = (itemId) => {
    const confirmed = window.confirm("Have you received the payment?");
    if (confirmed) {
      try {
        const updatedItems = items.map((item) => {
          if (item.id === itemId) {
            return { ...item, orderStatus: "Completed" };
          }
          return item;
        });
        localStorage.setItem("orders", JSON.stringify(updatedItems));
        setItems(updatedItems);
        console.log("Payment confirmed and order status updated to Completed.");
        navigate("/");
      } catch (error) {
        console.error("Error confirming payment:", error);
      }
    }
  };

  const handleDeleteItem = (itemId) => {
    const confirmed = window.confirm("Are you sure you want to delete this item?");
    if (confirmed) {
      try {
        const updatedItems = items.filter((item) => item.id !== itemId);
        localStorage.setItem("orders", JSON.stringify(updatedItems));
        setItems(updatedItems);
        console.log("Item deleted.");
      } catch (error) {
        console.error("Error deleting item:", error);
      }
    }
  };

  const handleAdminDelete = (itemId) => {
    const password = prompt("Please enter the admin password:");
    if (password === "1234") {
      handleDeleteItem(itemId);
    } else {
      alert("Incorrect password. You are not authorized to delete this item.");
    }
  };

  return (
    <section>
      <div className="container">
        <h1>MarketPlace</h1>

        <div className="--flex wrapper_mpc">
          {items.map(({ id, title, amount, location, orderStatus, weight }, idx) => (
            <div key={idx} className="mpc --p2">
              <div>
                <p> Title: {title} </p>
                <p> Amount: {amount} </p>
                <p> Location: {location} </p>
                <p> Weight: {weight} kg</p>
                <p>{orderStatus}! </p>

                {orderStatus === "Delivered" && (
                  <div className="--mt">
                    <button className="--btn --btn-success" onClick={() => handleConfirmPayment(id)}>
                      Confirm Payment
                    </button>
                  </div>
                )}

                {orderStatus !== "Completed" && (
                  <div className="--mt">
                    <button className="--btn --btn-danger" onClick={() => handleDeleteItem(id)}>
                      Delete {title}
                    </button>
                  </div>
                )}

                {/* ADMIN DELETE */}

                {/* <div className="--mt">
                  <button className="--btn --btn-success" onClick={() => handleAdminDelete(id)}>
                    Admin Delete
                  </button>
                </div> */}

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketPlace;
