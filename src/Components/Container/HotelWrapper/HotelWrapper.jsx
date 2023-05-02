import React from "react";
import { HotelCard } from "../../Pure/HotelCard/HotelCard";
import danubiospng from "../../../assets/danubios.png";
import sohopng from '../../../assets/soho.png'
import london from '../../../assets/london.png'
import stars from "../../../assets/status.svg";
import "./HotelWrapper.css";

export const HotelWrapper = () => {
  return (
    <div className="hotelwrapper">
      <HotelCard
        img={danubiospng}
        direccion={"London NW8 7JT England"}
        nombre={"Danubius Hotel Regents Park"}
        precio={"$200 Par Night"}
        status={stars}
      />
         <HotelCard
        img={sohopng}
        direccion={"London NW8 7JT England"}
        nombre={"The Resident Soho"}
        precio={"$200 Par Night"}
        status={stars}
      />     <HotelCard
        img={london}
        direccion={"London NW8 7JT England"}
        nombre={"London Bridge Hotel"}
        precio={"$200 Par Night"}
        status={stars}
      />
       <HotelCard
        img={danubiospng}
        direccion={"London NW8 7JT England"}
        nombre={"London Bridge Hotel"}
        precio={"$200 Par Night"}
        status={stars}
      /> 
    </div>
  );
};
