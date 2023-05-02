import React from "react";
import { Logo } from "../Logo/Logo";
import svgInstagram from '../../../assets/instagram.svg'
import svgFacebook from '../../../assets/facebook.svg'
import svgGoogle from '../../../assets/google.svg'
import "./FooterRedes.css";

export const FooterRedes = () => {
  return (
    <div className="footer_redes">
      <Logo />
      <p>
        Lorem Ipsum is simply dummy text <br /> of the printing and typesetting <br />
        industry.
      </p>
      <div className="redes">
         <img src={svgFacebook} alt="" />
         <img src={svgInstagram} alt="" />
         <img src={svgGoogle} alt="" />
      </div>
    </div>
  );
};
