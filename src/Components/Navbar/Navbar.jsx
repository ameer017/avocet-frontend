import { Link, NavLink } from "react-router-dom";
import logo from "/logo.png";
import "./Navbar.css";
import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  });

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const toggleNavItems = () => {
    setShowNav(!showNav);
  };
  return (
    <nav className={`navbar ${scroll ? "sticky" : ""}`}>
      <div className="containerOne">
        <Link to="/" className="logo">
          <img src={logo} alt="" className="logo" />
        </Link>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <IoMenu size={25} color="green" />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/token">EarthFi</NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
            <li className="dropdown">
              <li onClick={toggleDropdown} className="dropdown-toggle">
                Pages
              </li>
              {dropdownOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <NavLink to="/order-creation" onClick={toggleDropdown}>
                      Order Creation
                    </NavLink>
                  </li>
                  {/* <li>
                    <NavLink to="/buy-asset" onClick={toggleDropdown}>
                      Market Place
                    </NavLink>
                  </li> */}
                  <li>
                    <NavLink to="/buy-asset" onClick={toggleDropdown}>
                      Buy Asset
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
