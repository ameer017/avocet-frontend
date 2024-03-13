import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home";
import { useEffect, useState } from "react";
import Loader from "./Components/Loader/Loader";
import Team from "./Components/Team/Team";
import About from "./Components/About/About";
import Docs from "./Components/Docs/Docs";
import Profile from "./Pages/Profile/Profile";
import OrderCreation from "./Pages/OrderCreation/OrderCreation";
import Token from "./Pages/Token/Token";
import Api from "./Pages/Api/Api";
import Contact from "./Pages/Contact/Contact";
import Service from "./Pages/Service/Service";
import TermsAndCondition from "./Pages/Terms/TermAndCondition";
import GetStarted from "./Pages/GetStarted/GetStarted";
import ConnectWallet from "./Pages/Connect/ConnectWallet";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  // Smart contract integration

  async function createPlastik() {}
  async function updateCreatePrice() {}
  async function updatePlastik() {}
  async function updatePrice() {}
  async function buyPlastik() {}
  async function getAllPlastiks() {}
  async function getPlastik() {}
  async function getUserPlastiks() {}
  async function getListingPrice() {}

  // End

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const routes = [
    { path: "/", element: <Home /> },
    { path: "/team", element: <Team /> },
    { path: "/about", element: <About /> },
    { path: "/documentation", element: <Docs /> },
    { path: "/profile", element: <Profile /> },
    { path: "/order-creation", element: <OrderCreation /> },
    { path: "/token", element: <Token /> },
    { path: "/api", element: <Api /> },
    { path: "/contact", element: <Contact /> },
    { path: "/service", element: <Service /> },
    { path: "/terms", element: <TermsAndCondition /> },
    { path: "/get-started", element: <GetStarted /> },
    { path: "/wallet-connect", element: <ConnectWallet /> },
  ];

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Routes>
            {routes.map(({ path, element }, index) => (
              <Route
                key={index}
                path={path}
                element={<Layout>{element}</Layout>}
              />
            ))}
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
