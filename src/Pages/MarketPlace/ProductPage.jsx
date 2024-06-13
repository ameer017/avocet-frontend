import { ethers } from "ethers";
import { useParams } from "react-router-dom";
import EarthfiABI from "../../constant/EarthfiABI.json";
import axios from "axios";
import { useState } from "react";
import { GetIpfsUrlFromPinata } from "../../utils/test/utils";
import "./MarketPlace.scss";
import { toast } from "react-toastify";

export default function ProductPage(props) {
  const [data, updateData] = useState({});
  const [dataFetched, updateDataFetched] = useState(false);
  const [message, updateMessage] = useState("");
  const [currAddress, updateCurrAddress] = useState("0x");

  async function getproductData(productId) {
    // After adding your Hardhat network to your metamask, this code will get providers and signers
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const addr = await signer.getAddress();
    // Pull the deployed contract instance
    let contract = new ethers.Contract(
      EarthfiABI.address,
      EarthfiABI.abi,
      signer
    );
    // Create a product Token
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
      buyer: listedProduct.buyer,
      image: meta.image,
      title: meta.title,
      location: meta.location,
      weight: meta.weight,
    };
    console.log(item);
    updateData(item);
    updateDataFetched(true);
    console.log("address", addr);
    updateCurrAddress(addr);
  }

  async function buyProduct(productId) {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      let contract = new ethers.Contract(
        EarthfiABI.address,
        EarthfiABI.abi,
        signer
      );
      const salePrice = ethers.utils.parseUnits(data.amount, "ether");
      updateMessage("Buying the product... Please Wait (Upto 5 mins)");

      let transaction = await contract.executeSale(productId, {
        value: salePrice,
      });
      await transaction.wait();

      toast.success(`Product Bought, Please Pickup and then confirm receipt!`);
      updateMessage("");
      getproductData(productId);
    } catch (e) {
      toast.error("Transaction Error: " + e.message);
      updateMessage("");
    }
  }

  async function confirmReceipt(productId) {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
  
      let contract = new ethers.Contract(
        EarthfiABI.address,
        EarthfiABI.abi,
        signer
      );
  
      updateMessage("Confirming receipt... Please Wait");
  
      let transaction = await contract.confirmReceipt(productId, {
        gasLimit: 3000000,
      });
  
      await transaction.wait();
  
      toast.success("You have successfully confirmed receipt of the product!");
      updateMessage("");
      getproductData(productId); // Update product data after confirmation
    } catch (e) {
      toast.error("Confirmation Error: " + e.message);
      updateMessage("");
    }
  }
  

  const params = useParams();
  const productId = params.productId;
  if (!dataFetched) getproductData(productId);
  if (typeof data.image === "string")
    data.image = GetIpfsUrlFromPinata(data.image);

  return (
    <section>
      <div className="p-page">
        <div className="product-details --flex-center gap-12px">
          <div>
            <img
              src={data.image}
              alt=""
              width={250}
              style={{ borderRadius: "10px", cursor: "pointer" }}
            />
          </div>

          <div>
            <h2>Title: {data.title}</h2>
            <address>Location: {data.location}</address>
            <p>
              <span>{data.amount + " Celo"}</span> ||{" "}
              <span>{data.weight + "KG"}</span>
            </p>

            <p>
              Seller: <span className="text-sm text-wrap">{data.seller}</span>
            </p>

            <div className="action-buttons">
              {currAddress !== data.owner && currAddress !== data.seller ? (
                <>
                  {data.buyer ===
                  "0x0000000000000000000000000000000000000000" ? (
                    <button
                      className="enableEthereumButton"
                      onClick={() => buyProduct(productId)}
                    >
                      Buy Now
                    </button>
                  ) : data.buyer === currAddress ? (
                    <button
                      className="enableEthereumButton"
                      onClick={() => confirmReceipt(productId)}
                    >
                      Confirm Receipt
                    </button>
                  ) : null}
                </>
              ) : (
                <div className="owner-message" style={{ textAlign: "center" }}>
                  You are the owner of this Product
                </div>
              )}
              <div className="message">{message}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
