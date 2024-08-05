// TeamPage.js
import React from "react";
import TeamMembers from "./TeamMembers";
import "./Team.scss";
import aliumusa from "/src/assets/aliumusa.png";

const Advisor = () => {
  return (
    <div className="team-page">
      <h2>Advisors</h2>
      <div className="team-members">
        <TeamMembers
          name="Aliu Musa"
          role="Advisor"
          image={aliumusa}
          x="https://twitter.com/herlew99"
          linkedin="https://www.linkedin.com/in/aliumusa/"
        />
      </div>
    </div>
  );
};

export default Advisor;
