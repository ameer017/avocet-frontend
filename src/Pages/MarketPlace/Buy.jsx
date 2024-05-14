import React, { useEffect, useState } from "react";
import "./MarketPlace.scss";
import axios from "axios";

const Buy = () => {
  const [items, setItems] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchStatus, setSearchStatus] = useState("");

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

  const handleSearch = () => {
    // Filter items based on search criteria
    const filteredItems = items.filter((item) => {
      const titleMatch =
        item.title &&
        item.title.toLowerCase().includes(searchTitle.toLowerCase());
      const statusMatch =
        item.orderStatus &&
        item.orderStatus.toLowerCase().includes(searchStatus.toLowerCase());
      return titleMatch && statusMatch;
    });
    return filteredItems;
  };

  const handleBuyAsset = async (itemId) => {
    try {
      const updatedItems = items.map((item) => {
        if (item.id === itemId) {
          return { ...item, orderStatus: "Processing", bought: true };
        }
        return item;
      });
      await axios.put(`http://localhost:3500/marketList/${itemId}`, {
        orderStatus: "Processing",
      });
      setItems(updatedItems);
      console.log("Order status updated to Processing.");
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  const handleAssetReceived = async (itemId) => {
    try {
      const updatedItems = items.map((item) => {
        if (item.id === itemId) {
          return { ...item, orderStatus: "Delivered" };
        }
        return item;
      });
      await axios.put(`http://localhost:3500/marketList/${itemId}`, {
        orderStatus: "Delivered",
      });
      setItems(updatedItems);
      console.log("Order status updated to Delivered.");
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  return (
    <section>
      <div className="container">
        <h1>Buy Asset</h1>

        <div className="--flex input-container">
          <input
            type="text"
            placeholder="Search by title"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        <div className="--flex wrapper_mpc">
          {/* displays only orders with status -> "processing" */}
          {handleSearch().map(
            (
              { id, title, amount, location, orderStatus, weight, bought },
              idx
            ) => (
              <div key={idx} className="mpc --p2">
                <div>
                  <p> Title: {title} </p>
                  <p> Amount: {amount} </p>
                  <p> Location: {location} </p>
                  <p> Weight: {weight} kg</p>
                  <p>{orderStatus}! </p>

                  <div className="--mt --flex-between">
                    {!bought && (
                      <button
                        className="--btn --btn-blue"
                        onClick={() => handleBuyAsset(id)}
                      >
                        Buy Asset
                      </button>
                    )}
                    {bought && (
                      <button
                        className="--btn --btn-blue"
                        onClick={() => handleAssetReceived(id)}
                        disabled={orderStatus !== "Processing"}
                      >
                        Asset Received
                      </button>
                    )}
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

export default Buy;
