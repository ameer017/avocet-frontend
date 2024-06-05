// TeamPage.js
import React from "react";
import TeamMembers from "./TeamMembers";
import "./Team.scss";
import aliumusa from "/src/assets/aliumusa.png";
import roqeebah from "/src/assets/roqeebah.png";
import abdullahi from "/src/assets/ameer.jpg";
import khadija from "/src/assets/khadija.png";
import bayo from "/src/assets/bayo.png";
import kenny from "/src/assets/kenny.png";

const Team = () => {
  return (
    <div className="team-page">
      <h2>Our Team</h2>
      <div className="team-members">
        <TeamMembers
          name="Aliu Musa"
          role="Co-Founder, CEO"
          image={aliumusa}
          x="https://twitter.com/herlew99"
          linkedin="https://www.linkedin.com/in/aliumusa/"
        />

        <TeamMembers
          name="Abdullahi Raji"
          role="Co-Founder, CTO"
          image={abdullahi}
          x="https://twitter.com/alAmeer170"
          linkedin="https://www.linkedin.com/in/raji-abdullahi-a-4598b42a5/"
        />

        <TeamMembers
          name="Rokeebah Olajide"
          role="Marketing Lead"
          image={roqeebah}
          x="https://twitter.com/Olabimpe963"
          linkedin="https://www.linkedin.com/in/olajide-rokeebat-98507329a/"
        />

        <TeamMembers
          name="Abubakar Kehinde"
          role="Project Lead"
          image={kenny}
          x="https://twitter.com/kennySpec"
          linkedin="https://www.linkedin.com/in/kehinde-abubakar-029223252/"
        />

        <TeamMembers
          name="Khadijah Musa"
          role="Software Dev."
          image={khadija}
          x="https://twitter.com/khady_bola"
          linkedin="https://www.linkedin.com/in/khadijah-musa-851a80251"
        />

        <TeamMembers
          name="Abdulakeem Adebayo"
          role="Blockchain Dev."
          image={bayo}
          x="https://twitter.com/AkeemAd28605307"
          linkedin="https://www.linkedin.com/in/adebayo-ademola-678530199"
        />
      </div>
    </div>
  );
};

export default Team;
