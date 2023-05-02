import React from "react";
import "./NavLink.css";

const links = ["Booking", "Facilities", "About Us", "Location", "Contact"];
const linkElement = links.map((element, index) => (
  <li key={index}>{element}</li>
));

export const NavLink = ({estilo}) => {
  return <ul className={estilo}>
    {linkElement}
  </ul>;
};
