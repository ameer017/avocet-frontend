import React from "react";
import "./Partner.scss";
import planet3r from "/src/assets/planet3r.png";
import logo from "/src/assets/logo-no-background.png";

const Partner = () => {
  return (
    <section>
      <div className="partner">
        <h1>Our Partners And Clients</h1>

        <div className="--flex-center gap-12px">
          <img src={planet3r} alt="planet3r" title="" />

          <img
            src="https://www.beierrecycling.com/wp-content/themes/beierrecycling/images/logo.png"
            alt="logo-img"
          />

          <img srcSet="ghrng.com/wp-content/uploads/2023/01/ghr_primary-300x86.png 300w, https://ghrng.com/wp-content/uploads/2023/01/ghr_primary-768x220.png 768w, https://ghrng.com/wp-content/uploads/2023/01/ghr_primary-1536x441.png 1536w, https://ghrng.com/wp-content/uploads/2023/01/ghr_primary-2048x588.png 2048w" />

          <img src={logo} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Partner;
