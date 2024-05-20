import React, { useState } from "react";
import "./OrderCreation.scss";
import { useNavigate } from "react-router-dom";

const OrderCreation = () => {
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    weight: "",
    location: "",
    amount: "",
    orderStatus: "Processing!!",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const confirmOrder = async () => {
    try {
      const orders = JSON.parse(localStorage.getItem("orders")) || [];
      const newOrder = { ...formData, id: Date.now() };

      orders.push(newOrder);
      localStorage.setItem("orders", JSON.stringify(orders));

      setFormData({
        title: "",
        weight: "",
        location: "",
        amount: "",
        orderStatus: "in order!!",
      });
      console.log("Order created successfully!");
      navigate("/market-place");

      setTimeout(() => {
        const updatedOrders = JSON.parse(localStorage.getItem("orders")) || [];
        const updatedOrderList = updatedOrders.filter(order => order.id !== newOrder.id);

        localStorage.setItem("orders", JSON.stringify(updatedOrderList));
        console.log("Order deleted successfully after 10 minutes.");
      }, 10 * 60 * 1000);
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  const cancelOrder = () => {
    setShowConfirmation(false);
  };

  return (
    <section>
      <div className="form-box">
        <div className="form-container">
          <h2>Enter Order Details</h2>
          <code>Take a bold step today!... Join the revolution</code>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Input order Title"
              />
            </div>
            <div className="form-group">
              <label>Weight</label>
              <input
                type="text"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                placeholder="KG"
              />
            </div>
            <div className="form-group">
              <label>Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="No 5, Ibadan str Ebute Meta - Lagos"
              />
            </div>
            <div className="form-group">
              <label>Amount</label>
              <input
                type="text"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Enter amount"
              />
            </div>

            <button type="create" className="--btn --btn-success --btn-block">
              Create
            </button>
          </form>
        </div>
      </div>

      {showConfirmation && (
        <div className="confirmation-panel">
          <p>Are you sure you want to create this order?</p>
          <p>
            If your order is not picked in 10 minutes, <br />
            it&apos;ll automatically cancel
          </p>
          <div className="--flex --flex-direction --flex-center">
            <button onClick={confirmOrder} className="--btn --btn-primary">
              Yes
            </button>
            <button onClick={cancelOrder} className="--btn-danger --btn">
              No
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default OrderCreation;
