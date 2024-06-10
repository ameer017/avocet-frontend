import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "/logo.png";
import "./Navbar.css";
import { useLocation } from "react-router";
import { ethers } from "ethers";

const Navbar = () => {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const [connected, toggleConnect] = useState(false);
  const [currAddress, updateAddress] = useState("0x");
  const location = useLocation();

  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  const closeSidebar = () => {
    setActive("nav__menu");
    setIcon("nav__toggler");
  };

  async function getAddress() {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const addr = await signer.getAddress();
      updateAddress(addr);
    } catch (error) {
      console.error("Failed to get address:", error);
    }
  }

  async function connectWebsite() {
    const celoTestnetChainId = "0xaef3"; // Chain ID for Celo Alfajores Testnet
    const celoTestnetChainParams = {
      chainId: celoTestnetChainId,
      chainName: "Celo Alfajores Testnet",
      nativeCurrency: {
        name: "Celo",
        symbol: "CELO",
        decimals: 18,
      },
      rpcUrls: ["https://alfajores-forno.celo-testnet.org"],
      blockExplorerUrls: ["https://alfajores-blockscout.celo-testnet.org/"],
    };

    try {
      const chainId = await window.ethereum.request({ method: "eth_chainId" });

      if (chainId !== celoTestnetChainId) {
        try {
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: celoTestnetChainId }],
          });
        } catch (switchError) {
          if (switchError.code === 4902) {
            try {
              await window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [celoTestnetChainParams],
              });
            } catch (addError) {
              console.error("Failed to add Celo Alfajores chain:", addError);
              return;
            }
          } else {
            console.error(
              "Failed to switch to Celo Alfajores chain:",
              switchError
            );
            return;
          }
        }
      }

      await window.ethereum.request({ method: "eth_requestAccounts" });

      console.log("Connected to MetaMask and Celo Alfajores network");
      await getAddress(); // Ensure getAddress is awaited to handle async
      window.location.replace(location.pathname);
    } catch (error) {
      console.error("Failed to connect to MetaMask:", error);
      toast.error("Error Connecting wallet");
    }
  }

  useEffect(() => {
    let val = window.ethereum.isConnected();
    if (val) {
      // console.log("is it because of this?", val);
      getAddress();
      toggleConnect(val);
    }
    window.ethereum.on("accountsChanged", function (account) {
      window.location.replace(location.pathname);
    });
  });

  return (
    <nav className="nav">
      <Link to="/">
        <img src={logo} alt="" width={100} onClick={closeSidebar} />
      </Link>

      <ul className={active}>
        <li className="nav__item">
          <Link to="/about" className="nav__link" onClick={closeSidebar}>
            About
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/token" className="nav__link" onClick={closeSidebar}>
            EarthFi
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/profile" className="nav__link" onClick={closeSidebar}>
            Profile
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="/order-creation"
            className="nav__link"
            onClick={closeSidebar}
          >
            Create
          </Link>
        </li>
        {/* <li className="nav__item">
          <Link to="/buy-asset" className="nav__link" onClick={closeSidebar}>
            Buy
          </Link>
        </li> */}
        <li className="nav__item">
          <Link to="/market-place" className="nav__link" onClick={closeSidebar}>
            Market-Place
          </Link>
        </li>

        <button className="--btn --btn-blue" onClick={connectWebsite}>
          {connected ? `${currAddress.substring(0, 5)}...` : "Connect Wallet"}
        </button>
      </ul>

      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line1"></div>
        <div className="line1"></div>
      </div>
    </nav>
  );
};

export default Navbar;
