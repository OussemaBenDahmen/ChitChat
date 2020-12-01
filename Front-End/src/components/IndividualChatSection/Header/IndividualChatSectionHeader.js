import React from "react";
import { Link } from "react-router-dom";
import DropDown from "../../StyledComponents/DropdownDiv";

function IndividualChatSectionHeader(props) {
  return (
    <header className="MessageSectionHeader">
      <h2 className="RoomName-FriendName">Friend {props.el}</h2>
      <div className="DropDown">
        <button
          className="MessageSectionHeaderDropDownBtn"
          onClick={() => props.setIsDropDownOpen(!props.isDropDownOpen)}
        >
          <i className="fa fa-ellipsis-v"></i>
        </button>
        <DropDown isOpen={props.isDropDownOpen}>
          <button
            className="MessageSectionDropDownContent"
            onClick={() => {
              props.setIsDropDownOpen(false);
            }}
          >
            Mute
          </button>
          <button className="MessageSectionDropDownContent">Block</button>
        </DropDown>
      </div>
    </header>
  );
}

export default IndividualChatSectionHeader;
