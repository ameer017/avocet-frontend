import React, { useEffect, useState } from "react";
import "./MarketPlace.scss";

const Buy = () => {
  const [items, setItems] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("orders")) || [];
    setItems(storedItems);
  }, []);

  const handleSearch = () => {
    const filteredItems = items.filter((item) => {
      const titleMatch = item.title && item.title.toLowerCase().includes(searchTitle.toLowerCase());
      return titleMatch;
    });
    return filteredItems;
  };

  const handleBuyAsset = (itemId) => {
    try {
      const updatedItems = items.map((item) => {
        if (item.id === itemId) {
          return { ...item, orderStatus: "Completed", bought: true };
        }
        return item;
      });
      localStorage.setItem("orders", JSON.stringify(updatedItems));
      setItems(updatedItems);
      console.log("Order status updated to Completed.");
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
          {handleSearch().map(({ id, title, amount, location, orderStatus, weight, bought }, idx) => (
            <div key={idx} className="mpc --p2">
              <div>
                <p> Title: {title} </p>
                <p> Amount: {amount} </p>
                <p> Location: {location} </p>
                <p> Weight: {weight} kg</p>
                <p>{orderStatus}! </p>

                <div className="--mt --flex-between">
                  {!bought && (
                    <button className="--btn --btn-blue" onClick={() => handleBuyAsset(id)}>
                      Buy Asset
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Buy;
