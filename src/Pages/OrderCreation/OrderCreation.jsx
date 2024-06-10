import React, { useState } from "react";
import "./OrderCreation.scss";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { uploadJSONToIPFS } from "../../pinata";
import EarthfiABI from "../../constant/EarthfiABI.json";
import {ethers} from "ethers";

const OrderCreation = () => {
  const navigate = useNavigate();

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formParams, setFormParams] = useState({
    title: "",
    weight: "",
    location: "",
    amount: "",
  });
  const [message, updateMessage] = useState("");
  const [transactionData, setTransactionData] = useState(null);

  async function disableButton() {
    const listButton = document.getElementById("list-button");
    listButton.disabled = true;
    listButton.style.backgroundColor = "grey";
    listButton.style.opacity = 0.3;
  }

  async function enableButton() {
    const listButton = document.getElementById("list-button");
    listButton.disabled = false;
    listButton.style.backgroundColor = "#A500FF";
    listButton.style.opacity = 1;
  }

  async function uploadMetadataToIPFS() {
    const { title, weight, location, amount } = formParams;
    // Make sure that none of the fields are empty
    if (!title || !weight || !location || !amount) {
      updateMessage("Please fill all the fields!");
      return -1;
    }

    const productJSON = {
      title,
      weight,
      location,
      amount,
    };

    try {
      // Upload the metadata JSON to IPFS
      const response = await uploadJSONToIPFS(productJSON);
      if (response.success === true) {
        console.log("Uploaded JSON to Pinata: ", response);
        return response.pinataURL;
      }
    } catch (e) {
      console.log("error uploading JSON metadata:", e);
    }
  }

  async function confirmOrder() {
    setShowConfirmation(false);

    if (transactionData) {
      const { metadataURL, price, listingPrice, contract } = transactionData;
      try {
        // Actually create the product
        let transaction = await contract.createProduct(metadataURL, price, {
          value: listingPrice,
        });
        await transaction.wait();

        toast.success("Successfully listed your product!");
        enableButton();
        updateMessage("");
        setFormParams({
          title: "",
          weight: "",
          location: "",
          amount: "",
        });
        navigate("/market-place");
      } catch (e) {
        toast.error("Upload error: " + e);
        console.error("failed", e)
        enableButton();
      }
    }
  }

  function cancelOrder() {
    setShowConfirmation(false);
    enableButton();
  }

  async function sell(e) {
    e.preventDefault();

    // Upload data to IPFS
    try {
      const metadataURL = await uploadMetadataToIPFS();
      if (metadataURL === -1) return;
      // After adding your Hardhat network to your Metamask, this code will get providers and signers
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      disableButton();
      updateMessage(
        "Uploading product (takes a few mins).. please don't click anything!"
      );

      // Pull the deployed contract instance
      let contract = new ethers.Contract(
        EarthfiABI.address,
        EarthfiABI.abi,
        signer
      );

      // Massage the params to be sent to the create product request
      const price = ethers.utils.parseUnits(formParams.amount, "ether");
      let listingPrice = await contract.getListprice();
      listingPrice = listingPrice.toString();

      // Set the transaction data for confirmation
      setTransactionData({ metadataURL, price, listingPrice, contract });

      // Show the confirmation modal
      setShowConfirmation(true);
    } catch (e) {
      toast.error("Upload error: " + e);
      enableButton();
    }
  }

  return (
    <section>
      <div className="form-box">
        <div className="form-container">
          <h2>Enter Order Details</h2>
          <code>Take a bold step today!... Join the revolution</code>
          <form onSubmit={sell}>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                name="title"
                placeholder="Input order Title"
                onChange={(e) =>
                  setFormParams({ ...formParams, title: e.target.value })
                }
                value={formParams.title}
              />
            </div>
            <div className="form-group">
              <label>Weight</label>
              <input
                type="text"
                name="weight"
                placeholder="KG"
                onChange={(e) =>
                  setFormParams({ ...formParams, weight: e.target.value })
                }
                value={formParams.weight}
              />
            </div>
            <div className="form-group">
              <label>Location</label>
              <input
                type="text"
                name="location"
                placeholder="No 5, Ibadan str Ebute Meta - Lagos"
                onChange={(e) =>
                  setFormParams({ ...formParams, location: e.target.value })
                }
                value={formParams.location}
              />
            </div>
            <div className="form-group">
              <label>Amount</label>
              <input
                type="text"
                name="amount"
                placeholder="Enter amount"
                onChange={(e) =>
                  setFormParams({ ...formParams, amount: e.target.value })
                }
                value={formParams.amount}
              />
            </div>
            <div>{message}</div>
            <button
              id="list-button"
              type="submit"
              className="--btn --btn-success --btn-block"
            >
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
            <button onClick={cancelOrder} className="--btn --btn-danger">
              No
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default OrderCreation;
