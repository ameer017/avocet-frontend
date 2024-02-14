// TeamPage.js
import React from "react";
import TeamMembers from "./TeamMembers";
import "./Team.scss";

const Team = () => {
  return (
    <div className="team-page">
      <h2>Our Team</h2>
      <div className="team-members">
        <TeamMembers
          name="Abubakr Hussein"
          role="Project Manager"
          image="https://images.pexels.com/photos/209728/pexels-photo-209728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          x="mmm"
          insta="mmm"
          linkedin="mmm"
        />
        <TeamMembers
          name="Abdullahi Raji"
          role="Full Stack Dev."
          image="https://images.pexels.com/photos/209728/pexels-photo-209728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          x="mmm"
          insta="mmm"
          linkedin="mmm"
        />
        <TeamMembers
          name="Akeem Adebayo"
          role="Blockchain Dev."
          image="https://images.pexels.com/photos/209728/pexels-photo-209728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          x="mmm"
          insta="mmm"
          linkedin="mmm"
        />
        <TeamMembers
          name="Rokeebah Olajide"
          role="Business Lead"
          image="https://images.pexels.com/photos/209728/pexels-photo-209728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          x="mmm"
          insta="mmm"
          linkedin="mmm"
        />
      </div>
    </div>
  );
};

export default Team;
