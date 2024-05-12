// TeamMembers.js
import React from "react";
import { Link } from "react-router-dom";
import { BsTwitterX, BsLinkedin } from "react-icons/bs";

const TeamMember = ({ name, role, image, x,  linkedin }) => {
  return (
    <div className="team-member">
      <div className="member-details">
        <img src={image} className="--mt" alt={name} />
        <h3 className="--mt">{name}</h3>
        <p>{role}</p>
        <div className="--flex-center">
          <Link to={x}>
            <BsTwitterX />
          </Link>
          <Link to={linkedin}>
            <BsLinkedin />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
