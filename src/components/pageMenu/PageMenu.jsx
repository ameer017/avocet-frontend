import React from "react";
import { NavLink } from "react-router-dom";
import { AdminAuthorLink, AdminLink, SellerLink } from "../protect/hiddenLink";

const PageMenu = () => {
  return (
    <div className="profile">
      <nav className="--btn-success --p --mb">
        <ul className="home-links">
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>

          <AdminAuthorLink>
            <li>
              <NavLink to="/users">Users</NavLink>
            </li>
            <li>
              <NavLink to="/order">Orders</NavLink>
            </li>
          </AdminAuthorLink>
          <AdminLink>
            <li>
              <NavLink to="/payment">Payments</NavLink>
            </li>
          </AdminLink>
          
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