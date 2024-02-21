// TeamMembers.js
import React from "react";
import { Link } from "react-router-dom";
import { BsTwitterX, BsInstagram, BsLinkedin } from "react-icons/bs";

const TeamMember = ({ name, role, image, x, insta, linkedin }) => {
  return (
    <div className="team-member">
      <div className="member-details">
        <h3>{name}</h3>
        <p>{role}</p>
        <div className="--flex-center">
          <Link to={x}>
            <BsTwitterX />
          </Link>
          <Link to={insta}>
            <BsInstagram />
          </Link>
          <Link to={linkedin}>
            <BsLinkedin />
          </Link>
        </div>
        <img src={image} className="--mt" alt={name} />
      </div>
    </div>
  );
};

export default TeamMember;
