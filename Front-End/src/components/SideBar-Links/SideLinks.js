import React, { useState } from "react";
import Scrollbars from "react-custom-scrollbars";
import { Link } from "react-router-dom";
import DropDown from "../StyledComponents/DropdownDiv";

import "./style.css";

function SideLinks() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="SideLinksContainer">
      <div className="SideLinks-Section UserSection">
        <h2 className="UserNameDisplay">TestUser</h2>
        <div className="DropDownContainer">
          <button
            className="SideBarUserSectionGearBtn"
            onClick={() => {
              setIsOpen(!isOpen);
              console.log(isOpen);
            }}
          >
            <i className="fa fa-cog gear"></i>
          </button>
          <DropDown isOpen={isOpen}>
            <Link className="DropDownItem">Account</Link>
            <Link className="DropDownItem">Status</Link>
            <Link className="DropDownItem">Disconnect</Link>
          </DropDown>
        </div>
      </div>
      <div className="SideLinks-Section RoomSection">
        <h4 className="SectionTitle">Rooms</h4>
        <input className="SearchInput" type="text" placeholder="# Search" />
        <Scrollbars autoHeight autoHide hideTracksWhenNotNeeded>
          <div className="RoomsList">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((el, i) => (
              <li className="RoomLink" key={i}>
                <Link className="SideBarRoomsLink"> # Room {el}</Link>
              </li>
            ))}
          </div>
        </Scrollbars>
      </div>
      <div className="SideLinks-Section FriendListSection">
        <h4 className="SectionTitle">Friends</h4>
        <input className="SearchInput" type="text" placeholder="# Search" />
        <Scrollbars autoHeight autoHide hideTracksWhenNotNeeded>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((el) => (
            <div className="SideBarFriendElement">
              <i
                className={`fa fa-circle ${el % 2 ? "Online" : "Offline"}`}
              ></i>
              <img
                className="SideBarFriendImg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6DwG_7wDljpyRLG-iFOmqPDI-LJtR1-cqTQ&usqp=CAU"
                alt="Friend"
              />
              <h4>Friend {el}</h4>
            </div>
          ))}
        </Scrollbars>
      </div>
    </div>
  );
}

export default SideLinks;
