import React from "react";
import { HeaderImg } from "../../Pure/HeaderImg/HeaderImg";
import { HeaderText } from "../../Pure/HeaderText/HeaderText";
import { SearchButton } from "../SearchButton/SearchButton";

import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <HeaderText />
      <HeaderImg />
      <SearchButton />
    </div>
  );
};
