import React from "react";
import { Link } from "react-router-dom";

const TeamMember = ({ name, role, image, x, insta, linkedin }) => {
  return (
    <div className="team-member">
      <div className="member-details">
        <h3>{name}</h3>
        <p>{role}</p>
        <div className="--flex-center">
          <span>{x}</span> &nbsp; &nbsp;
          <span>{insta}</span> &nbsp; &nbsp;
          <span>{linkedin}</span>
        </div>
        <img src={image} className="--mt" />
      </div>
    </div>
  );
};

export default TeamMember;
