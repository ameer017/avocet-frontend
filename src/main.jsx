import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { TransactionProvider } from "./context/TransactionContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TransactionProvider>
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <ToastContainer />
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  </TransactionProvider>
);
