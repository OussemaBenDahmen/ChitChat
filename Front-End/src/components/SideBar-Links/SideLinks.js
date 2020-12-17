import React, { useState, useEffect } from "react";
import Scrollbars from "react-custom-scrollbars";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LogOutService } from "../../services/auth/auth";
import FriendListElement from "../FriendElemnt/FriendListElement";
import DropDown from "../StyledComponents/DropdownDiv";
import { GetFriendListService } from "../../services/friendsList";

import "./style.css";
import { GetMyRoomsService } from "../../services/rooms";

function SideLinks(props) {
  const User = useSelector((state) => state.User);
  const FriendsList = useSelector((state) => state.FriendsList);
  const Rooms = useSelector((state) => state.Rooms);
  const dispatch = useDispatch();
  // const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(GetFriendListService(User._id));
    dispatch(GetMyRoomsService(User));
  }, [dispatch]);
  return (
    <div className="SideLinksContainer">
      <div className="SideLinks-Section UserSection">
        <h2 className="UserNameDisplay">TestUser</h2>
        <div className="DropDownContainer">
          <button
            className="SideBarUserSectionGearBtn"
            onClick={() => {
              props.setIsOpen(!props.isOpen);
            }}
          >
            <i className="fa fa-cog gear"></i>
          </button>

          <DropDown isOpen={props.isOpen}>
            <button
              className="DropDownItem"
              onClick={() => {
                props.setAccountSectionOpen(!props.AccountSectionOpen);
                props.setIsOpen(false);
              }}
            >
              Account
            </button>
            <button className="DropDownItem">Status</button>
            <button
              className="DropDownItem"
              onClick={() => dispatch(LogOutService(User))}
            >
              Disconnect
            </button>
          </DropDown>
        </div>
      </div>
      <div className="SideLinks-Section RoomSection">
        <h4 className="SectionTitle">Rooms</h4>
        <input className="SearchInput" type="text" placeholder="# Search" />
        <div className="RoomLink">
          <Link className="SideBarRoomsLink" to="/Create_Room">
            <i className="fa fa-plus"></i> Create a Room
          </Link>
        </div>
        <Scrollbars
          autoHeight
          autoHide
          hideTracksWhenNotNeeded
          className="RoomListScrollBar"
        >
          <div className="RoomsList">
            {Rooms.map((el, i) => (
              <li className="RoomLink" key={i}>
                <Link
                  className="SideBarRoomsLink"
                  to={`/Room_id=${el._id}`}
                  key={i}
                >
                  # {el.RoomName}
                </Link>
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
          {FriendsList.map((el, i) => (
            <Link className="FriendListLink" to={`/Chat_id=${el._id}`} key={i}>
              <FriendListElement el={el} indx={i} />
            </Link>
          ))}
        </Scrollbars>
      </div>
    </div>
  );
}

export default SideLinks;
