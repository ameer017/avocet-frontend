import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { FaBottleWater } from "react-icons/fa6";

const Navbar = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };

  return (
    <header className="menu__wrapper">
      <div className="menu__bar">
        <nav>
          <div className="logo" onClick={goHome}>
            <FaBottleWater />
            <div>
              <span>AVOCET</span>
              <span>SOLUTIONS</span>
            </div>
          </div>

          <ul className="navigation hide">

            {/* <div className="dropdown__wrapper">
                            <div className="dropdown">
                                <ul className="list-items-with-description">
                                    <li>
                                        <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24"
                                            stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                            stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
                                        </svg>
                                        <div className="item-title">
                                            <h3>Previews</h3>
                                            <p>Zero config, more innovation</p>
                                        </div>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M12 4l-8 4l8 4l8 -4l-8 -4" />
                                            <path d="M4 12l8 4l8 -4" />
                                            <path d="M4 16l8 4l8 -4" />
                                        </svg>
                                        <div className="item-title">
                                            <h3>Infrastructure</h3>
                                            <p>Always fast always online</p>
                                        </div>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-brand-nextjs" width="24" height="24"
                                            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993" />
                                            <path d="M15 12v-3" />
                                        </svg>
                                        <div className="item-title">
                                            <h3>Next js</h3>
                                            <p>The native Next.js platform</p>
                                        </div>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                                            <path d="M3.6 9h16.8" />
                                            <path d="M3.6 15h16.8" />
                                            <path d="M11.5 3a17 17 0 0 0 0 18" />
                                            <path d="M12.5 3a17 17 0 0 1 0 18" />
                                        </svg>
                                        <div className="item-title">
                                            <h3>Edge Functions</h3>
                                            <p>Dynamic pages, static speed</p>
                                        </div>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M3 12h4l3 8l4 -16l3 8h4" />
                                        </svg>
                                        <div className="item-title">
                                            <h3>Analytics</h3>
                                            <p>Real-time insights, peak performance</p>
                                        </div>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0" />
                                            <path d="M4 6v6a8 3 0 0 0 16 0v-6" />
                                            <path d="M4 12v6a8 3 0 0 0 16 0v-6" />
                                        </svg>
                                        <div className="item-title">
                                            <h3>Storage</h3>
                                            <p>Serverless storage for frontend</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li> */}

          </ul>
        </nav>
      </div>
      <div className="action-buttons hide">
        <a href="#log-in" title="Log in" className="--btn --btn-primary">
          Log In
        </a>
        <a href="#sign-up" title="Sign up" className="--btn --btn-secondary">
          Sign up
        </a>
      </div>
      <button aria-label="Open menu" className="burger-menu" type="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-menu"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 8l16 0" />
          <path d="M4 16l16 0" />
        </svg>
      </button>
    </header>
  );
};

export default Navbar;
