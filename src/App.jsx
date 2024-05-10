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
import Contact from "./Pages/Contact/Contact";
import Service from "./Pages/Service/Service";
import TermsAndCondition from "./Pages/Terms/TermAndCondition";
import GetStarted from "./Pages/GetStarted/GetStarted";
import ConnectWallet from "./Pages/Connect/ConnectWallet";
import Register from "./Pages/Auth/Register";
import MarketPlace from "./Pages/MarketPlace/MarketPlace";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  // Static data integration
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppinglist")) || []
  );
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("marketList", JSON.stringify(items));
  }, [items]);

  const addItem = (
    title,
    amount,
    location,
    orderStatus = "Processing",
    weight
  ) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, title, amount, location, orderStatus, weight };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const routes = [
    { path: "/", element: <Home /> },
    { path: "/team", element: <Team /> },
    { path: "/about", element: <About /> },
    { path: "/documentation", element: <Docs /> },
    { path: "/profile", element: <Profile /> },
    {
      path: "/order-creation",
      element: <OrderCreation  newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit} />,
    },
    { path: "/token", element: <Token /> },
    { path: "/register", element: <Register /> },
    { path: "/contact", element: <Contact /> },
    { path: "/service", element: <Service /> },
    { path: "/terms", element: <TermsAndCondition /> },
    { path: "/get-started", element: <GetStarted /> },
    { path: "/wallet-connect", element: <ConnectWallet /> },
    { path: "/market-place", element: <MarketPlace items={items} /> },
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
