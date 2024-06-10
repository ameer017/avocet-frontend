import React from "react";
import "./Profile.scss";
import { useParams } from "react-router-dom";
import EarthfiABI from "../../constant/EarthfiABI.json";
import axios from "axios";
import { useState } from "react";
import { ethers } from "ethers";
import Buy from "../MarketPlace/Buy";

const Profile = () => {
  const [data, updateData] = useState([]);
  const [dataFetched, updateFetched] = useState(false);
  const [address, updateAddress] = useState("0x");
  const [totalPrice, updateTotalPrice] = useState("0");

  async function getProductData(productId) {
    let sumPrice = 0;
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

    let transaction = await contract.getMyProduct();

    const items = await Promise.all(
      transaction.map(async (i) => {
        var productURI = await contract.tokenURI(i.productId);
        let meta = await axios.get(productURI);
        meta = meta.data;

       
        // console.log(amount)

        let item = {
          productId: i.productId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          title: meta.title,
          weight: meta.weight,
          location: meta.location,
          amount: meta.amount,

        };

        return item;
      })
    );

    updateData(items);
    updateFetched(true);
    updateAddress(addr);
    // updateTotalPrice(amount);
  }

  getProductData();

  const params = useParams();
  const productId = params.productId;
  if (!dataFetched) getProductData(productId);

  return (
    <>
      <section className="profile">
        <header className="header">
          <div className="details">
            <div className="stats">
              <div>
                <h4>Wallet:</h4>
                {address}
              </div>

              <div>
                <h4>Total Assets:</h4>
                <p>{data.length}</p>
              </div>
            </div>
          </div>
        </header>

        <section>
          <div className="container">
            <h2 className="font-bold">Your Products</h2>
            <div className="flex justify-center flex-wrap max-w-screen-xl">
              {data.map((value, index) => {
                return <Buy data={value} key={index} />;
              })}
            </div>
            <div className="mt-10 text-xl">
              {data.length === 0
                ? "Oops, No product data to display (Are you logged in?)"
                : ""}
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Profile;
