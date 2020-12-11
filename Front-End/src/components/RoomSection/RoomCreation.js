import React from "react";
import Scrollbars from "react-custom-scrollbars";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import RoomFriendListElement from "../FriendElemnt/RoomFriendList";
import RoomSpace from "../StyledComponents/RoomCreatorSpace";
import "./style.css";

function RoomCreation(props) {
  const FriendsList = useSelector((state) => state.FriendsList);
  const history = useHistory();
  return (
    <RoomSpace isLogged={props.isLogged}>
      <header className="RoomSpaceHeader">
        <h2>Create Room</h2>
        <input
          className="FormInput RoomNameInput"
          type="text"
          placeholder="Room Name"
          required
        />
        <div>
          <button className="CreateRoomBtn">Create</button>
          <button className="CancelBtn" onClick={() => history.goBack()}>
            Cancel
          </button>
        </div>
      </header>
      <h2>Choose your Friends</h2>
      <Scrollbars hideTracksWhenNotNeeded>
        <div className="RoomListSelection">
          {FriendsList.map((el, i) => (
            <div className="RoomFriendSelectionItem" key={i}>
              <input type="checkbox" />
              <RoomFriendListElement el={el} />
            </div>
          ))}
        </div>
      </Scrollbars>
    </RoomSpace>
  );
}

export default RoomCreation;
