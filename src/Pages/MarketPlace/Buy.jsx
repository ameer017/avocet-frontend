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
      const titleMatch = item.title
        .toLowerCase()
        .includes(searchTitle.toLowerCase());
      const statusMatch = item.orderStatus
        .toLowerCase()
        .includes(searchStatus.toLowerCase());
      return titleMatch && statusMatch;
    });
    return filteredItems;
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
          <input
            type="text"
            placeholder="Search by status"
            value={searchStatus}
            onChange={(e) => setSearchStatus(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        <div className="--flex wrapper_mpc">
          {/* displays only orders with status -> "processing" */}
          {handleSearch().map(
            ({ title, amount, location, orderStatus, weight }, idx) => (
              <div key={idx} className="mpc --p2">
                <div>
                  <p> Title: {title} </p>
                  <p> Amount: {amount} </p>
                  <p> Location: {location} </p>
                  <p> Weight: {weight} kg</p>
                  <p>{orderStatus}! </p>

                  <div className="--mt --flex-between">
                    <button className="--btn --btn-blue">Buy Asset</button>
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
