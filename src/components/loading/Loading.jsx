import React from "react";
import "./Loading.scss";
import ReactDOM from "react-dom";
import loaderImg from "../../assets/loader.gif";

const Loading = () => {
  return ReactDOM.createPortal(
    <div className="wrapper">
      <div className="loader">
        {/* <img src={loaderImg} alt="Loading..." /> */}
      </div>
    </div>,
    document.getElementById("loader")
  );
};

export const Spinner = () => {

};

export default Loading;