import React, { useState, useEffect } from "react";
import Scrollbars from "react-custom-scrollbars";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LogOutService } from "../../services/auth/auth";
import FriendListElement from "../FriendElemnt/FriendListElement";
import { GetFriendListService } from "../../services/friendsList";

import "./style.css";
import { GetMyRoomsService } from "../../services/rooms";
import SideBarCollapsable from "../StyledComponents/sideBarCollapable";
import { ServerURI } from "../../services/config";

function SideLinks(props) {
  const User = useSelector((state) => state.User);
  const FriendsList = useSelector((state) => state.FriendsList);
  const Rooms = useSelector((state) => state.Rooms);
  const dispatch = useDispatch();

  const [RoomFilter, setRoomFilter] = useState("");
  const [UserFilter, setUserFilter] = useState("");

  const [myViewPortWidth, setMyViewPortWidth] = useState(
    window.visualViewport.width
  );

  useEffect(() => {
    setMyViewPortWidth(window.visualViewport.width);
  }, []);

  useEffect(() => {
    dispatch(GetFriendListService(User._id));
    dispatch(GetMyRoomsService(User));
  }, [dispatch, User]);
  return (
    <div className="SideLinksContainer">
      <div className="SideLinks-Section UserSection">
        <img
          src={`${ServerURI}/${User.picture}`}
          alt="profilePic"
          className="UserImage"
        />
        <h2 className="UserNameDisplay">{User.UserName}</h2>

        <div className="DropDownContainer">
          <button
            className="SideBarUserSectionGearBtn"
            onClick={() => {
              props.setIsOpen(!props.isOpen);
            }}
          >
            <i className="fa fa-cog gear"></i>
          </button>
          <SideBarCollapsable isOpen={props.isOpen}>
            <button
              className="DropDownItem"
              onClick={() => {
                props.setAccountSectionOpen(!props.AccountSectionOpen);
                props.setIsOpen(false);
              }}
            >
              Account
            </button>
            <button
              className="DropDownItem"
              onClick={() => dispatch(LogOutService(User))}
            >
              Disconnect
            </button>
          </SideBarCollapsable>
        </div>
      </div>
      <div className="SideLinks-Section RoomSection">
        <h4 className="SectionTitle">Rooms</h4>
        <input
          className="SearchInput"
          type="text"
          placeholder="# Search"
          onChange={(e) => setRoomFilter(e.target.value.toLowerCase())}
        />
        <div className="RoomLink">
          <Link className="SideBarRoomsLink" to="/Create_Room">
            <i className="fa fa-plus"></i>{" "}
            <h3 className="CreateRoomLink">Create a Room</h3>
          </Link>
        </div>
        <Scrollbars
          autoHeight
          autoHide
          hideTracksWhenNotNeeded
          className="RoomListScrollBar"
        >
          <div className="RoomsList">
            {Rooms.filter((room) =>
              room.RoomName.toLowerCase().includes(RoomFilter)
            ).map((el, i) => (
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
        <input
          className="SearchInput"
          type="text"
          placeholder="# Search"
          onChange={(e) => setUserFilter(e.target.value.toLowerCase())}
        />
        <Scrollbars
          autoHeight
          autoHide
          hideTracksWhenNotNeeded
          className="FriendsListScrollBar"
        >
          {FriendsList.filter((user) => user.UserName.includes(UserFilter)).map(
            (el, i) => (
              <Link
                className="FriendListLink"
                to={`/Chat_id=${el._id}`}
                key={i}
              >
                <FriendListElement
                  el={el}
                  indx={i}
                  myViewPortWidth={myViewPortWidth}
                />
              </Link>
            )
          )}
        </Scrollbars>
      </div>
    </div>
  );
}

export default SideLinks;
