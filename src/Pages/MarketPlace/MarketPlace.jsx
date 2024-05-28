import React, { useEffect, useContext, useState } from "react";
import "./MarketPlace.scss";
import { useNavigate } from "react-router-dom";
import { TransactionContext } from "../../context/TransactionContext";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchWastes,
  deleteWaste,
  updateWaste,
} from "../../redux/features/plastik/plastikSlice";

const MarketPlace = () => {
  const navigate = useNavigate();
  const { approveTransaction } = useContext(TransactionContext);

  const dispatch = useDispatch();

  const items = useSelector((state) => state.wastes.wastes);
  const status = useSelector((state) => state.wastes.status);
  const error = useSelector((state) => state.wastes.error);
  const [message, setMessage] = useState("");

  useEffect(() => {
    dispatch(fetchWastes());
  }, [dispatch]);

  const handleApprove = async (itemId) => {
    try {
      const isBuyerDeposited = await contract.isBuyerDeposited();
      const isSellerApproved = await contract.isSellerApproved();
      if (isBuyerDeposited && isSellerApproved) {
        await approveTransaction();
        const updatedItem = items.find((item) => item._id === itemId);
        if (updatedItem) {
          const updatedItemData = { ...updatedItem, orderStatus: "Completed" };
          dispatch(updateWaste({ id: itemId, wasteData: updatedItemData }));
          setMessage(
            "Transaction approved and order status updated to Completed."
          );
          navigate("/");
        }
      } else {
        console.log("Payment not yet received by the seller.");
      }
    } catch (error) {
      setMessage("Error approving transaction:", error);
      setMessage("Only the seller can approve the transaction.");
    }
  };

  const handleDeleteItem = async (itemId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (confirmed) {
      try {
        dispatch(deleteWaste(itemId));
        setMessage("Item deleted.");
      } catch (error) {
        setMessage("Error deleting item:", error);
        setMessage("Failed to delete item.");
      }
    }
  };

  return (
    <section>
      <div className="container">
        <h1>MarketPlace</h1>
        {status === "loading" && <p>Loading...</p>}
        {status === "failed" && <p>Error: {error}</p>}
        {status === "succeeded" && (
          <div className="--flex wrapper_mpc">
            {items.map(
              ({ _id, title, amount, location, orderStatus, weight }) => (
                <div key={_id} className="mpc --p2">
                  <div>
                    <p> Title: {title} </p>
                    <p> Amount: {amount} </p>
                    <p> Location: {location} </p>
                    <p> Weight: {weight} kg</p>
                    <p>Status: {orderStatus}! </p>

                    {orderStatus === "Delivered" && (
                      <div className="--mt">
                        <button
                          className="--btn --btn-success"
                          onClick={() => handleApprove(_id)}
                        >
                          Confirm Payment
                        </button>
                      </div>
                    )}

                    {orderStatus !== "Purchased" && (
                      <div className="--mt">
                        <button
                          className="--btn --btn-danger"
                          onClick={() => handleDeleteItem(_id)}
                        >
                          Delete {title}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default MarketPlace;
