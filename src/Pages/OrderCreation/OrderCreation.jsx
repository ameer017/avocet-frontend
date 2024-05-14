import React, { useState } from "react";
import "./OrderCreation.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const OrderCreation = () => {
  const navigate = useNavigate();
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
    try {
      await axios.post("http://localhost:3500/marketList", formData);
      setFormData({
        title: "",
        weight: "",
        location: "",
        amount: "",
        orderStatus: "Processing!!",
      });
      console.log("Order created successfully!");
      navigate("/market-place");
    } catch (error) {
      console.error("Error creating order:", error);
    }
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
    </section>
  );
};

export default OrderCreation;
