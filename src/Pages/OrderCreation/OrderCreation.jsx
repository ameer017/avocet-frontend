import React, { useRef, useState } from "react";
import "./OrderCreation.scss";

const OrderCreation = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef = useRef();

  return (
    <section>
      <div className="form-box">
        <div className="form-container">
          <h2>Enter Order Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Title</label>
              <input
                autoFocus
                ref={inputRef}
                type="text"
                name="title"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Input order Title"
              />
            </div>
            <div className="form-group">
              <label>Weight</label>
              <input
                autoFocus
                ref={inputRef}
                type="text"
                name="weight"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="KG"
              />
            </div>
            <div className="form-group">
              <label>Location</label>
              <input
                autoFocus
                ref={inputRef}
                type="text"
                name="location"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="No 5, Ibadan str Ebute Meta - Lagos"
              />
            </div>
            <div className="form-group">
              <label>Amount</label>
              <input
                autoFocus
                ref={inputRef}
                type="text"
                name="amount"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Enter amount"
              />
            </div>
            <button
              type="create"
              className="--btn --btn-success --btn-block"
              onClick={() => inputRef.current.focus()}
            >
              Create Order
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default OrderCreation;
