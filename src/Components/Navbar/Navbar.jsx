import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import Web3 from "web3";

const lists = [
  { tag: "About", path: "/about" },
  { tag: "Avocoin", path: "/token" },
  { tag: "Profile", path: "/profile" },
  { tag: "Create", path: "/order-creation" },
];


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [account, setAccount] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [web3, setWeb3] = useState(null);

  useEffect(() => {
    checkConnectionOnMount();
  }, []);

  useEffect(() => {
    localStorage.setItem("isConnected", isConnected);
    localStorage.setItem("account", account);
  }, [isConnected, account]);

  const home = () => navigate("/");

  const toggleNavbar = () => setIsOpen(!isOpen);

  const checkConnectionOnMount = async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      setWeb3(web3);
      const accounts = await web3.eth.getAccounts();
      if (accounts.length > 0) {
        setAccount(accounts[0]);
        setIsConnected(true);
      }
    }
  };

  const connectWallet = async () => {
    if (!isConnected) {
      if (window.ethereum) {
        try {
          await window.ethereum.request({ method: "eth_requestAccounts" });
          const accounts = await web3.eth.getAccounts();
          setAccount(accounts[0]);
          setIsConnected(true);
        } catch (error) {
          console.error("User denied account access");
        }
      } else if (window.web3) {
        const web3 = new Web3(window.web3.currentProvider);
        setWeb3(web3);
        setIsConnected(true);
      } else {
        console.log("Non-Ethereum browser detected. Consider MetaMask!");
      }
    } else {
      disconnectWallet();
    }
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setAccount(null);
    setWeb3(null);
  };

  return (
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo" onClick={home}>
            <img src="/avocet-high-resolution-logo.png" alt="Logo" />
          </div>

          <div className={`navbar-links ${isOpen ? "active" : ""}`}>
            {lists.map(({ tag, path }, i) => (
              <Link to={path} key={i}>
                {tag}
              </Link>
            ))}
          </div>

          <button className="--btn --btn-success btn" onClick={connectWallet}>
            {isConnected ? shortenText(account, 6) : "Connect Wallet"}
          </button>

          <div className="navbar-toggle" onClick={toggleNavbar}>
            <span className={`bar ${isOpen ? "open" : ""}`}></span>
            <span className={`bar ${isOpen ? "open" : ""}`}></span>
            <span className={`bar ${isOpen ? "open" : ""}`}></span>
          </div>
        </div>
      </nav>
  );
};

export const shortenText = (text, n) => {
  if (text.length > n) {
    const shoretenedText = text.substring(0, n).concat("...");
    return shoretenedText;
  }
  return text;
};

export default Navbar;
