import React, { useEffect, useState, useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";
import { ethers } from "ethers";
import "./MarketPlace.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchWastes, updateWaste } from "../../redux/features/plastik/plastikSlice";
import { toast } from "react-toastify";

const Buy = () => {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.wastes.wastes);
  const status = useSelector((state) => state.wastes.status);
  const error = useSelector((state) => state.wastes.error);

  useEffect(() => {
    dispatch(fetchWastes());
  }, [dispatch]);
  const { currentAccount, connectWallet, disconnectWallet, deposit, provider } =
    useContext(TransactionContext);
  const [searchTitle, setSearchTitle] = useState("");

  const handleSearch = () => {
    const filteredItems = items.filter((item) => {
      const titleMatch =
        item.title &&
        item.title.toLowerCase().includes(searchTitle.toLowerCase());
      return titleMatch;
    });
    return filteredItems;
  };

  const handleBuyAsset = async (itemId, amount) => {
    if (amount) {
      try {
        const signer = provider.getSigner();
        const transaction = {
          to: "0x6Db691950c09b2025855B3166D14EbAF1F6E8ba9",
          value: ethers.utils.parseEther(amount),
        };

        // Estimate gas limit
        const estimatedGas = await signer.estimateGas(transaction);
        const gasPrice = await provider.getGasPrice();
        const totalGasCost = estimatedGas.mul(gasPrice);

        const userBalance = await provider.getBalance(currentAccount);
        if (userBalance.lt(totalGasCost.add(ethers.utils.parseEther(amount)))) {
          alert(
            "Insufficient funds to cover gas fees. Please add more ETH to your wallet."
          );
          return;
        }

        await deposit(amount);
        const updatedItems = items.map((item) => {
          if (item.id === itemId) {
            const updatedItem = {
              ...item,
              orderStatus: "Purchased",
              bought: true,
            };
            updateWaste(updatedItem);
            return updatedItem;
          }
          return item;
        });
        setItems(updatedItems);
        console.log("Asset purchased and order status updated to Purchased.");
      } catch (error) {
        console.error("Error processing purchase:", error);
        if (error.code === "INSUFFICIENT_FUNDS") {
          console.log(
            "Insufficient funds to complete the transaction. Please add more ETH to your wallet."
          );
        } else {
          console.log(
            "Insufficient funds to complete the transaction. Please add more ETH to your wallet."
          );
        }
      }
    }
  };

  return (
    <section>
      {currentAccount ? (
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
                    <p>Status: {orderStatus}! </p>
                    <div className="--mt --flex-between">
                      {!bought && (
                        <button
                          className="--btn --btn-blue"
                          onClick={() => handleBuyAsset(id, amount)}
                        >
                          Buy Asset
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
          <div>
            <p>Wallet Address: {currentAccount}</p>
            <button className="--btn --btn-danger" onClick={disconnectWallet}>
              Disconnect Account
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <h1>Please connect to your MetaMask Account to use this service</h1>
          </div>
          <button onClick={connectWallet} className="--btn --btn-success btn">
            Connect Wallet
          </button>
        </div>
      )}
    </section>
  );
};

export default Buy;
