import React from "react";
import "./Loader.scss";
import {BiLeaf} from 'react-icons/bi'


const Loader = () => {
    return (
      <div className='soundWave'>
          <span>A</span>
          <span>V</span>
          <span>O</span>
          <span>C</span>
          <span>E</span>
          <span>T</span>
          <span><BiLeaf/></span>
      </div>
    );
  
};



export default Loader;
