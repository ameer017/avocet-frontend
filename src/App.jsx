import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home";
import { useEffect, useState } from "react";

import Team from "./Components/Team/Team";
import About from "./Components/About/About";
import Docs from "./Components/Docs/Docs";
import Profile from "./Pages/Profile/Profile";
import OrderCreation from "./Pages/OrderCreation/OrderCreation";
import Token from "./Pages/Token/Token";
import Contact from "./Pages/Contact/Contact";
import Service from "./Pages/Service/Service";
import TermsAndCondition from "./Pages/Terms/TermAndCondition";
import GetStarted from "./Pages/GetStarted/GetStarted";
import ConnectWallet from "./Pages/Connect/ConnectWallet";
import Register from "./Pages/Auth/Register";
import MarketPlace from "./Pages/MarketPlace/MarketPlace";
import Buy from "./Pages/MarketPlace/Buy";
import ScrollToTop from "react-scroll-to-top";
import ProductPage from "./Pages/MarketPlace/ProductPage";

function App() {
  const location = useLocation();

  // Static data integration

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const routes = [
    { path: "/team", element: <Team /> },
    { path: "/about", element: <About /> },
    { path: "/documentation", element: <Docs /> },
    { path: "/profile", element: <Profile /> },
    {
      path: "/order-creation",
      element: <OrderCreation />,
    },
    { path: "/token", element: <Token /> },
    { path: "/register", element: <Register /> },
    { path: "/contact", element: <Contact /> },
    { path: "/service", element: <Service /> },
    { path: "/terms", element: <TermsAndCondition /> },
    { path: "/get-started", element: <GetStarted /> },
    { path: "/wallet-connect", element: <ConnectWallet /> },
    { path: "/market-place", element: <MarketPlace /> },
    { path: "/buy-asset", element: <Buy /> },
    { path: "/productPage/:productId", element: <ProductPage /> },
  ];

  return (
    <div>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          {routes.map(({ path, element }, index) => (
            <Route
              key={index}
              path={path}
              element={<Layout>{element}</Layout>}
            />
          ))}
        </Routes>
      </>

      <ScrollToTop smooth />
    </div>
  );
}

export default App;
