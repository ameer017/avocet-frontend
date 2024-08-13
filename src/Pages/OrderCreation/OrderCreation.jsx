import React, { useEffect, useState } from "react";
import "./OrderCreation.scss";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { uploadFileToIPFS, uploadJSONToIPFS } from "../../pinata";
import EarthfiABI from "../../constant/EarthfiABI.json";
import { ethers } from "ethers";
import { createPublicClient, http } from "viem";
import { celo } from "viem/chains";
import { Helmet } from 'react-helmet';


const OrderCreation = () => {
  const navigate = useNavigate();
  const [fileURL, setFileURL] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formParams, setFormParams] = useState({
    title: "",
    weight: "",
    location: "",
    amount: "",
  });
  const [message, updateMessage] = useState("");
  const [transactionData, setTransactionData] = useState(null);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [accountBalance, setAccountBalance] = useState(null);

  useEffect(() => {
    checkWalletConnection();
  }, []);

  async function checkWalletConnection() {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await provider.listAccounts();
        if (accounts.length > 0) {
          setIsWalletConnected(true);
          const balance = await provider.getBalance(accounts[0]);
          setAccountBalance(ethers.utils.formatEther(balance));
        } else {
          setIsWalletConnected(false);
        }
      } catch (e) {
        console.log("Error checking wallet connection: ", e);
      }
    } else {
      setIsWalletConnected(false);
    }
  }

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

  async function OnChangeFile(e) {
    var file = e.target.files[0];
    try {
      disableButton();
      updateMessage("Uploading image.. please dont click anything!");
      const response = await uploadFileToIPFS(file);
      if (response.success === true) {
        enableButton();
        updateMessage("");
        console.log("Uploaded image to Pinata: ", response.pinataURL);
        toast.success("Uploaded");
        setFileURL(response.pinataURL);
      }
    } catch (e) {
      console.log("Error during file upload", e);
      toast.error("Error uploading file to pinata");
    }
  }

  async function uploadMetadataToIPFS() {
    const { title, weight, location, amount } = formParams;
    if (!title || !weight || !location || !amount || !fileURL) {
      updateMessage("Please fill all the fields!");
      return -1;
    }

    const productJSON = {
      title,
      weight,
      location,
      amount,
      image: fileURL,
    };

    try {
      const response = await uploadJSONToIPFS(productJSON);
      if (response.success === true) {
        console.log("Uploaded JSON to Pinata: ", response);
        return response.pinataURL;
      }
    } catch (e) {
      console.log("error uploading JSON metadata:", e);
    }
  }

  async function estimateGas(publicClient, transaction, feeCurrency = "") {
    return await publicClient.estimateGas({
      ...transaction,
      feeCurrency: feeCurrency ? feeCurrency : "",
    });
  }

  async function confirmOrder() {
    setShowConfirmation(false);

    if (transactionData) {
      const { metadataURL, amount, listingPrice, contract, gasLimit } = transactionData;
      try {
        let transaction = await contract.createProduct(metadataURL, amount, {
          value: listingPrice,
          gasLimit: gasLimit,
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
        console.error("failed", e);
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

    try {
      const metadataURL = await uploadMetadataToIPFS();
      if (metadataURL === -1) return;
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      disableButton();
      updateMessage(
        "Uploading product (takes a few mins).. please don't click anything!"
      );

      let contract = new ethers.Contract(
        EarthfiABI.address,
        EarthfiABI.abi,
        signer
      );

      const amount = ethers.utils.parseUnits(formParams.amount, "ether");
      let listingPrice = await contract.getListprice();
      listingPrice = listingPrice.toString();

      const publicClient = createPublicClient({
        chain: celo,
        transport: http(),
      });

      const gasLimit = await estimateGas(publicClient, {
        account: await signer.getAddress(),
        to: EarthfiABI.address,
        value: listingPrice,
        data: contract.interface.encodeFunctionData("createProduct", [metadataURL, amount]),
      });

      const totalCost = ethers.BigNumber.from(gasLimit)
        .mul(await provider.getGasPrice())
        .add(listingPrice)
        .add(amount);

      const balance = await provider.getBalance(await signer.getAddress());

      if (balance.lt(totalCost)) {
        toast.error(
          `Insufficient funds: Required ${ethers.utils.formatEther(
            totalCost
          )} CELO, but only ${ethers.utils.formatEther(
            balance
          )} CELO available.`
        );
        enableButton();
        return;
      }

      setTransactionData({ metadataURL, amount, listingPrice, contract, gasLimit });

      setShowConfirmation(true);
    } catch (e) {
      toast.error("Upload error: " + e);
      enableButton();
    }
  }

  return (
    <section>
      <Helmet>
        <title>Create an Order - EarthFi</title>
        <meta name="description" content="Create your order on EarthFi's marketplace. Engage in sustainable trade and contribute to the green economy." />
      </Helmet>
      {isWalletConnected ? (
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
                  placeholder="Enter amount in Celo"
                  onChange={(e) =>
                    setFormParams({ ...formParams, amount: e.target.value })
                  }
                  value={formParams.amount}
                />
              </div>
              <div className="form-group">
                <label>Upload Image</label>
                <input
                  type={"file"}
                  onChange={OnChangeFile}
                />
              </div>
              <div className="msg">{message}</div>
              <div className="msg">{accountBalance}</div>

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
      ) : (
        <div className="--flex-center container">
          <p>Please connect your wallet to create a product.</p>
        </div>
      )}
      {showConfirmation && (
        <div className="confirmation-dialog">
          <h2>Confirm Order</h2>
          <p>Are you sure you want to create this product?</p>
          <div className="dialog-buttons">
            <button onClick={confirmOrder}>Confirm</button>
            <button onClick={cancelOrder}>Cancel</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default OrderCreation;


