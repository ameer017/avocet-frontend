import React from "react";
import { BiSearch } from "react-icons/bi";
import "./Search.scss";

const SearchOrder = ({ value, onChange }) => {
  return (
    <div className='search'>
      <BiSearch size={18} className='icon' />
      <input
        type="text"
        placeholder="Search Orders"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchOrder;