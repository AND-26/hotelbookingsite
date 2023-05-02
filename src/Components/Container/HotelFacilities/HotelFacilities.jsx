import React from "react";
import { FacilitiesWrapper } from "../FacilitiesWrapper/FacilitiesWrapper";
import "./HotelFacilities.css";

export const HotelFacilities = () => {
  return (
    <div className="hotelfacilities">
     <div className="hotelfacilitiestext">
     <h1>We do our best <br /> facilities provide you</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing <br /> and typesetting
        industry. Lorem Ipsum has been <br /> the industry's standard dummy{" "}
      </p>
      <button>Contact Now</button>
     </div>
     <FacilitiesWrapper/>
    </div>
  );
};
