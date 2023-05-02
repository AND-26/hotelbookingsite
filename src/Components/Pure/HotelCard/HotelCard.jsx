import React from "react";
import "./HotelCard.css";

export const HotelCard = ({ img, direccion, nombre, precio, status }) => {
  return (
    <div className="hotelcard">
      <img src={img} alt="" />
      <p>{direccion}</p>
      <h2>{nombre}</h2>
      <div className="star">
        <p>{precio}</p> <img src={status} alt="star" />
      </div>
    </div>
  );
};
