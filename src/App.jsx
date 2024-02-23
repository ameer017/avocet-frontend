import { Route, Routes } from "react-router-dom";
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
// import ScrollToTop from 'react-router-scroll-top'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

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
  ];

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
        {/* <ScrollToTop/> */}

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
