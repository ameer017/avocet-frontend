import React, { useState, useEffect } from "react";
import "./Profile.scss";
import { useParams } from "react-router-dom";
import EarthfiABI from "../../constant/EarthfiABI.json";
import axios from "axios";
import { ethers } from "ethers";

const Profile = () => {
  const [data, setData] = useState([]);
  const [address, setAddress] = useState("");
  const [totalPrice, setTotalPrice] = useState("0");

  useEffect(() => {
    async function getProductData() {
      try {
        let sumPrice = 0;
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

        let transaction = await contract.getMyProduct();

        const items = await Promise.all(
          transaction.map(async (i) => {
            var productURI = await contract.tokenURI(i.productId);
            let meta = await axios.get(productURI);
            meta = meta.data;

            let amount = meta.amount.toString();

            let item = {
              productId: i.productId.toNumber(),
              seller: i.seller,
              owner: i.owner,
              title: meta.title,
              weight: meta.weight,
              location: meta.location,
              amount,
            };

            sumPrice += Number(amount);

            return item;
          })
        );

        setData(items);
        setAddress(addr);
        setTotalPrice(sumPrice.toPrecision(3));
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    }

    getProductData();
  }, []);

  const params = useParams();
  const productId = params.productId;

 

  return (
    <section className="profile">
      <header className="header">
        <div className="details">
          {!address ? (
            <div>
              <p>Connect wallet to view profile details</p>
            </div>
          ) : (
            <div className="stats">
              <div>
                <h4>Wallet Address:</h4>
                {address}
              </div>

              <div>
                <h4>Total Price:</h4>
                <p>{totalPrice} Celo</p>
              </div>
              <div>
                <h4>Total Assets:</h4>
                <p>{data.length}</p>
              </div>
            </div>
          )}
        </div>
      </header>
    </section>
  );
};

export default Profile;
