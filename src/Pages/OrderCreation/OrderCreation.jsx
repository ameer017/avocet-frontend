import React, { useState } from "react";
import "./OrderCreation.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createWaste } from "../../redux/features/plastik/plastikSlice";
import { toast } from "react-toastify";

const initialState = {
  title: "",
  weight: "",
  location: "",
  amount: "",
  orderStatus: "Created",
};

const OrderCreation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const { title, weight, location, amount } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const confirmOrder = async () => {
    try {
      const newOrder = { ...formData, id: Date.now() };
      dispatch(createWaste(newOrder));

      setFormData(initialState);
      console.log("Order created successfully!");
      navigate("/market-place");

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
                value={title}
                onChange={handleChange}
                placeholder="Input order Title"
              />
            </div>
            <div className="form-group">
              <label>Weight</label>
              <input
                type="text"
                name="weight"
                value={weight}
                onChange={handleChange}
                placeholder="KG"
              />
            </div>
            <div className="form-group">
              <label>Location</label>
              <input
                type="text"
                name="location"
                value={location}
                onChange={handleChange}
                placeholder="No 5, Ibadan str Ebute Meta - Lagos"
              />
            </div>
            <div className="form-group">
              <label>Amount</label>
              <input
                type="text"
                name="amount"
                value={amount}
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
