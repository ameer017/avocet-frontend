import React from "react";
import "./Profile.scss";

const Profile = () => {
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
            <h1 className="heading">Claire Doe</h1>

            <div className="stats">
              <div>
                <h4>Wallet:</h4>
                <p>0x................</p>
              </div>
              <div>
                <h4>Points:</h4>
                <p>100</p>
              </div>
              <div>
                <h4>Asset:</h4>
                <p>30</p>
              </div>
            </div>
          </div>
        </header>
      </section>
    </>
  );
};

export default Profile;
