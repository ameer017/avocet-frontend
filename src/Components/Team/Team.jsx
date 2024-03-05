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
          role="Project Lead"
          image="https://images.pexels.com/photos/209728/pexels-photo-209728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          x="https://twitter.com/kennySpec"
          insta="https://www.instagram.com/kennyx55/"
          linkedin="https://www.linkedin.com/in/kehinde-abubakar-029223252/"
        />
        <TeamMembers
          name="Abdullahi Raji"
          role="Full Stack Dev."
          image="/src/assets/IMG_20220206_143138_235.jpg"
          x="https://twitter.com/alAmeer170"
          insta="https://www.instagram.com/a.rajiabdullahi/"
          linkedin="https://www.linkedin.com/in/raji-abdullahi-a-4598b42a5/"
        />
        <TeamMembers
          name="Akeem Adebayo"
          role="Blockchain Dev."
          image="https://images.pexels.com/photos/209728/pexels-photo-209728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          x="https://twitter.com/AkeemAd28605307"
          insta="https://www.instagram.com/dev_bayz?igsh=MXdhaDBwbmxxa3ltaA%3D%3D&utm_source=qr"
          linkedin="https://www.linkedin.com/in/adebayo-ademola-678530199?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        />
        <TeamMembers
          name="Rokeebah Olajide"
          role="Marketing Lead"
          image="https://images.pexels.com/photos/209728/pexels-photo-209728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          x="https://twitter.com/Olabimpe963"
          insta="https://www.instagram.com/adesola01__/"
          linkedin="https://www.linkedin.com/in/olajide-rokeebat-98507329a/"
        />
      </div>
    </div>
  );
};

export default Team;
