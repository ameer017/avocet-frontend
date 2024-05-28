import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { TransactionProvider } from "./context/TransactionContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TransactionProvider>
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  </TransactionProvider>
);
