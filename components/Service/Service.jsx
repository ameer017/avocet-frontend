import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./Service.module.css";
import images from "../../img";
const Service = () => {
  return (
    <div className={Style.service}>
      <h1 style={{ textAlign: "center" }}>Services.</h1>
      <div className={Style.service_box}>
        <div className={Style.service_box_item}>
          <p className={Style.service_box_item_step}>
            <span>1</span>
          </p>
          <h3>Plastic Waste Collection.</h3>
          <p>
            Facilitating the collection of plastic waste materials from
            households and businesses. This involves scheduling pickups and
            collaborating with waste management companies.
          </p>
        </div>
        <div className={Style.service_box_item}>
          <p className={Style.service_box_item_step}>
            <span>2</span>
          </p>
          <h3>Sorting and Processing.</h3>
          <p>
            We use proper sorting and appropriate processing methods to ensure
            the quality and usability of the plastics being transformed, this
            contributes greatly to the sustainability of the waste-to-wealth
            initiative.
          </p>
        </div>
        <div className={Style.service_box_item}>
          <p className={Style.service_box_item_step}>
            <span>3</span>
          </p>
          <h3>Tracking and Reporting</h3>
          <p>
            We provide access for users to track their waste contributions, see
            the impact of their involvement in waste transformation, and access
            reports showcasing the overall environmental benefits achieved
            through the platform.
          </p>
        </div>
        {/* <div className={Style.service_box_item}>
          <p className={Style.service_box_item_step}>
            <span>4</span>
          </p>
          <h3>Start trading</h3>
          <p>
            Connect with wallet, discover, buy NTFs, sell your NFTs and earn
            money
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Service;
