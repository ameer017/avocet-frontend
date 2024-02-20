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

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />
            <Route
              path="/team"
              element={
                <Layout>
                  <Team />
                </Layout>
              }
            />
            <Route
              path="/about"
              element={
                <Layout>
                  <About />
                </Layout>
              }
            />
            <Route
              path="/documentation"
              element={
                <Layout>
                  <Docs />
                </Layout>
              }
            />
            <Route
              path="/profile"
              element={
                <Layout>
                  <Profile />
                </Layout>
              }
            />
            <Route
              path="/order-creation"
              element={
                <Layout>
                  <OrderCreation />
                </Layout>
              }
            />

            <Route
              path="/token"
              element={
                <Layout>
                  <Token />
                </Layout>
              }
            />

            <Route
              path="/api"
              element={
                <Layout>
                  <Api />
                </Layout>
              }
            />
            
            <Route
              path="/contact"
              element={
                <Layout>
                  <Contact />
                </Layout>
              }
            />
            
            <Route
              path="/service"
              element={
                <Layout>
                  <Service />
                </Layout>
              }
            />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
