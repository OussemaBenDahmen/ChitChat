import React, { useState } from "react";
import Scrollbars from "react-custom-scrollbars";
import { Link } from "react-router-dom";
import FriendListElement from "../FriendElemnt/FriendListElement";
import DropDown from "../StyledComponents/DropdownDiv";

import "./style.css";

function SideLinks(props) {
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
            }}
          >
            <i className="fa fa-cog gear"></i>
          </button>
          <DropDown isOpen={isOpen}>
            <Link
              className="DropDownItem"
              onClick={() => {
                props.setAccountSectionOpen(!props.AccountSectionOpen);
                setIsOpen(false);
              }}
            >
              Account
            </Link>
            <Link className="DropDownItem">Status</Link>
            <Link
              className="DropDownItem"
              onClick={() => props.setIsLogged(false)}
            >
              Disconnect
            </Link>
          </DropDown>
        </div>
      </div>
      <div className="SideLinks-Section RoomSection">
        <h4 className="SectionTitle">Rooms</h4>
        <input className="SearchInput" type="text" placeholder="# Search" />
        <div className="RoomLink">
          <Link className="SideBarRoomsLink" to="/Create_Room">
            <i className="fa fa-plus"></i> Create a Group
          </Link>
        </div>
        <Scrollbars
          autoHeight
          autoHide
          hideTracksWhenNotNeeded
          className="RoomListScrollBar"
        >
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
        <Scrollbars
          autoHeight
          autoHide
          hideTracksWhenNotNeeded
          className="FriendsListScrollBar"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((el) => (
            <FriendListElement el={el} />
          ))}
        </Scrollbars>
      </div>
    </div>
  );
}

export default SideLinks;
