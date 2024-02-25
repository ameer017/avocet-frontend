

import React, { useEffect, useState } from "react";


import "./ConnectWallet.scss";

const ConnectWallet = () => {
  const [activeBtn, setActiveBtn] = useState(1);


  return (
    <div className="connectWallet">
      <div className="connectWallet_box">
        <h1>Connect your wallet</h1>
        <p className="connectWallet_box_para">
          Connect with one of your available wallet providers or create a new
          one
        </p>
        <div className="connect">
          <div className="connect-links">
            <img src="/src/assets/provider-1.png" />
            <h4>Metamask</h4>
          </div>
          <div className="connect-links">
            <img src="/src/assets/provider-2.png" />
            <h4>Wallet Connect</h4>
          </div>
          <div className="connect-links">
            <img src="/src/assets/provider-3.png" />
            <h4>Wallet Link</h4>
          </div>
          <div className="connect-links">
            <img src="/src/assets/provider-4.png" />

            <h4>Formatic</h4>
          </div>
          <div className="connect-links">
            <img src="/src/assets/provider-5.png" />

            <h4>Coin Base</h4>
          </div>
          <div className="connect-links">
            <img src="/src/assets/provider-6.webp" />

            <h4>Joy Id</h4>
          </div>
          <div className="connect-links">
            <img src="/src/assets/provider-7.png" />

            <h4>Coin X</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
