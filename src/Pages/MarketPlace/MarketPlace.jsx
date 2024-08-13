import React, { useState } from "react";
import "./MarketPlace.scss";
import { ethers } from "ethers";
import EarthfiABI from "../../constant/EarthfiABI.json";
import { GetIpfsUrlFromPinata } from "../../utils/test/utils";
import axios from "axios";
import Buy from "./Buy";
import bin from "../../assets/bin.png";
import { Helmet } from 'react-helmet';


const MarketPlace = () => {
  const [dataFetched, updateFetched] = useState(false);
  const [data, updateData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  async function getAllProducts() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    let contract = new ethers.Contract(
      EarthfiABI.address,
      EarthfiABI.abi,
      signer
    );

    let transaction = await contract.getAllProducts();

    const items = await Promise.all(
      transaction.map(async (i) => {
        var productURI = await contract.tokenURI(i.productId);
        productURI = GetIpfsUrlFromPinata(productURI);
        let meta = await axios.get(productURI);
        meta = meta.data;

        let item = {
          amount: meta.amount,
          productId: i.productId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          title: meta.title,
          weight: meta.weight,
          location: meta.location,
        };
        return item;
      })
    );

    updateFetched(true);
    updateData(items);
  }

  getAllProducts();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = data.filter((item) =>
    item.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section>
      <Helmet>
        <title>Marketplace - EarthFi</title>
        <meta name="description" content="Browse EarthFi's marketplace for sustainable products and services. Join the green economy today." />
      </Helmet>
      <div className="container">
        <h2>Top Products</h2>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by location"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>

        {!dataFetched ? (
          <div className="--mh-50vh --flex-center ">
            <p>Connect wallet to view listed products</p>
            <img src={bin} width={200} alt="bin" />
          </div>
        ) : (
          <>
            {data.length === 0 ? <div>
              <p>Oops! No Product is currently listed in the market place</p>
            </div> :

              <div className="--flex wrapper_mpc">
                {filteredData.map((value, index) => {
                  return (
                    <div className="mpc --p2">
                      <Buy data={value} key={index} />
                    </div>
                  );
                })}
              </div>
            }
          </>
        )
        }


      </div>
    </section>
  );
};

export default MarketPlace;
