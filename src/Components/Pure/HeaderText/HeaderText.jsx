import React from "react";
import './HeaderText.css'
import arrow from '../../../assets/arrow_rigth.svg'

export const HeaderText = () => {
  return (
    <div className="header__text">
      <h1>Find your perfect <br /> place to stay</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and <br /> typesetting
        industry.
      </p>
      <p><img src={arrow} alt="arrow" /> Watch video</p>
    </div>
  );
};
