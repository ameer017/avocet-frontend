import React, { useEffect, useState, useContext } from "react";
import "./MarketPlace.scss";
import { useNavigate } from "react-router-dom";
import { TransactionContext } from "../../context/TransactionContext";
import { getItems, updateItem, deleteItem } from "../../utils/indexedDB";

const MarketPlace = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const { approveTransaction } = useContext(TransactionContext);

  useEffect(() => {
    const fetchItems = async () => {
      const storedItems = await getItems();
      setItems(storedItems);
    };
    fetchItems();
  }, []);

  const handleApprove = async (itemId) => {
    try {
      const isBuyerDeposited = await contract.isBuyerDeposited();
      const isSellerApproved = await contract.isSellerApproved();
      if (isBuyerDeposited && isSellerApproved) {
        await approveTransaction();
        const updatedItems = items.map((item) => {
          if (item.id === itemId) {
            const updatedItem = { ...item, orderStatus: "Completed" };
            updateItem(updatedItem);
            return updatedItem;
          }
          return item;
        });
        setItems(updatedItems);
        console.log("Transaction approved and order status updated to Completed.");
        navigate("/");
      } else {
        alert("Payment not yet received by the seller.");
      }
    } catch (error) {
      console.error("Error approving transaction:", error);
      alert('Only the seller can approve the transaction.');
    }
  };

  const handleDeleteItem = async (itemId) => {
    const confirmed = window.confirm("Are you sure you want to delete this item?");
    if (confirmed) {
      try {
        await deleteItem(itemId);
        const updatedItems = items.filter((item) => item.id !== itemId);
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
                {orderStatus === "Purchased" && (
                  <div className="--mt">
                    <button className="--btn --btn-success" onClick={() => handleApprove(id)}>
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
                <div className="--mt">
                  <button className="--btn --btn-success" onClick={() => handleAdminDelete(id)}>
                    Admin Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketPlace;
