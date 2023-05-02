import React from "react";
import { GroupButton } from "../../Pure/GroupButton/GroupButton";
import locationsvg from "../../../assets/location.svg";
import calendarsvg from '../../../assets/calendar.svg'
import personsvg from '../../../assets/person.svg'
import lupasvg from '../../../assets/lupa.svg'
import "./SearchButton.css";
import { Search } from "../../Pure/Search/Search";

export const SearchButton = () => {
  return (
    <div className="searchbutton">
      <GroupButton
        img={locationsvg}
        title={"Location"}
        text={"United states"}
        estilo={'groupbutton'}
      />
        <GroupButton
        img={calendarsvg}
        title={"Chack in"}
        text={"10 Jun 2021"}
        estilo={'groupbutton'}

      />    <GroupButton
        img={calendarsvg}
        title={"Chack out"}
        text={"15 Jun 2021"}
        estilo={'groupbutton'}

      />
        <GroupButton
        img={personsvg}
        title={"Rooms for"}
        text={"1 room , 2 guest"}
        estilo={'last_groupbutton'}
      />

      <Search img={lupasvg} 
        text={'Search...'}
      />
    </div>
  );
};
