import { ethers } from "ethers";
import { useParams } from "react-router-dom";
import EarthfiABI from "../../constant/EarthfiABI.json";
import axios from "axios";
import { useState } from "react";
import { GetIpfsUrlFromPinata } from "../../utils/test/utils";
import "./MarketPlace.scss"
import { toast } from "react-toastify";

export default function ProductPage(props) {
  const [data, updateData] = useState({});
  const [dataFetched, updateDataFetched] = useState(false);
  const [message, updateMessage] = useState("");
  const [currAddress, updateCurrAddress] = useState("0x");

  async function getproductData(productId) {
    //After adding your Hardhat network to your metamask, this code will get providers and signers
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const addr = await signer.getAddress();
    //Pull the deployed contract instance
    let contract = new ethers.Contract(
      EarthfiABI.address,
      EarthfiABI.abi,
      signer
    );
    //create an product Token
    var productURI = await contract.tokenURI(productId);
    const listedProduct = await contract.getListedForProductId(productId);
    productURI = GetIpfsUrlFromPinata(productURI);
    let meta = await axios.get(productURI);
    meta = meta.data;
    console.log(listedProduct);

    let item = {
      amount: meta.amount,
      productId: productId,
      seller: listedProduct.seller,
      owner: listedProduct.owner,
      title: meta.title,
      location: meta.location,
      weight: meta.weight,
      number: meta.number,
    };
    console.log(item);
    updateData(item);
    updateDataFetched(true);
    console.log("address", addr);
    updateCurrAddress(addr);
  }

  async function buyProduct(productId) {
    try {
      //After adding your Hardhat network to your metamask, this code will get providers and signers
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      //Pull the deployed contract instance
      let contract = new ethers.Contract(
        EarthfiABI.address,
        EarthfiABI.abi,
        signer
      );
      const salePrice = ethers.utils.parseUnits(data.amount, "ether");
      updateMessage("Buying the product... Please Wait (Upto 5 mins)");
      //run the executeSale function
      let transaction = await contract.executeSale(productId, {
        value: salePrice,
      });
      await transaction.wait();

      toast.success("You successfully bought the product!");
      updateMessage("");
    } catch (e) {
      toast.error("Upload Error" + e);
    }
  }

  const params = useParams();
  const productId = params.productId;
  if (!dataFetched) getproductData(productId);

  return (
    <section>
      <div className="p-page">
        <div className="product-details">
          <h2>Title: {data.title}</h2>
          <address>Location: {data.location}</address>
          <p>
            Amount: <span>{data.amount + " Celo"}</span>
          </p>
          <p>
            Owner: <span className="text-sm text-wrap">{data.owner}</span>
          </p>
          <p>
            Seller: <span className="text-sm text-wrap">{data.seller}</span>
          </p>
        </div>
        <div className="action-buttons">
          {currAddress !== data.owner && currAddress !== data.seller ? (
            <button
              className="enableEthereumButton"
              onClick={() => buyProduct(productId)}
            >
              Buy Now
            </button>
          ) : (
            <div className="owner-message">
              You are the owner of this Product
            </div>
          )}
          <div className="message">{message}</div>
        </div>
      </div>
    </section>
  );
}
