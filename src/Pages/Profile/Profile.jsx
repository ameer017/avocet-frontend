import React from "react";
import "./Profile.scss";

const Profile = () => {
  const account = localStorage.getItem("account") || "0x...";

  return (
    <>
      <section className="profile">
        <header className="header">
          <div className="details">
            <img
              src="https://cdn-icons-png.flaticon.com/128/456/456212.png"
              alt="John Doe"
              className="profile-pic"
            />
            <h1 className="heading">EarthFi</h1>

            <div className="stats">
              <div>
                <h4>Wallet:</h4>
                {/* <p>{account}</p> */}
                <p>Wallet Address</p>
              </div>
              <div>
                <h4>Points:</h4>
                <p>EFC</p>
              </div>
              <div>
                <h4>Assets Bought:</h4>
                <p>00</p>
              </div>
            </div>
          </div>
        </header>
      </section>
    </>
  );
};

export default Profile;
