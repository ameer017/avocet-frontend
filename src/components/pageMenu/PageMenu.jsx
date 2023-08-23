import React from "react";
import { NavLink } from "react-router-dom";
import { AdminAuthorLink,  Collector,  SellerLink, Verified } from "../protect/hiddenLink";

const PageMenu = () => {
  return (
    <div>
      <nav className="--btn-success --p --mb">
        <ul className="home-links">
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>

          <Verified>
            <SellerLink>
              <li>
                <NavLink to="/sell">Sell</NavLink>
              </li>  
            </SellerLink>
          </Verified>

          <AdminAuthorLink>
            <li>
              <NavLink to="/users">Users</NavLink>
            </li>
            <li>
              <NavLink to="/order">Orders</NavLink>
            </li>
          </AdminAuthorLink>
          
          <SellerLink>
            <li>
              <NavLink to="/updateProfile">Update Profile</NavLink>
            </li>

            <li>
              <NavLink to="/changePassword">Change Password</NavLink>
            </li>
          </SellerLink>
        </ul>
      </nav>
    </div>
  );
};

export default PageMenu;