import React from "react";
import imgHistori from "../../../assets/imgHistory.png";
import "./AboutUs.css";

export const AboutUs = () => {
  return (
    <div className="aboutus">
      <img src={imgHistori} alt="house" />
      <div className="aboutus_text">
        <h1>Discover our history</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting <br />
          industry. Lorem Ipsum has been the industry's{" "} <br /> <br />
          Lorem Ipsum is simply dummy text of the printing and typesetting <br />
          industry. Lorem Ipsum has been the industry's standard dummy <br /> Lorem
          Ipsum is simply dummy text of the printing and typesetting <br /> industry.
        </p>
        <button>Explore more</button>
      </div>
    </div>
  );
};
