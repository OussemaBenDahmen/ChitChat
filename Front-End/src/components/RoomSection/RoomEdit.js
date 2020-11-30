import React from "react";
import Scrollbars from "react-custom-scrollbars";
import RoomFriendListElement from "../FriendElemnt/RoomFriendList";
import RoomSpace from "../StyledComponents/RoomCreatorSpace";
import "./style.css";

function RoomEdit(props) {
  return (
    <RoomSpace isLogged={props.isLogged}>
      <header className="RoomSpaceHeader">
        <h2>Edit Room</h2>
        <input
          className="FormInput RoomNameInput"
          type="text"
          placeholder="Room Name"
          defaultValue="Room 1"
          required
        />
        <div>
          <button className="CreateRoomBtn">Save</button>
          <button className="CancelBtn">Cancel</button>
        </div>
      </header>
      <h2>Choose your Friends</h2>
      <Scrollbars hideTracksWhenNotNeeded>
        <div className="RoomListSelection">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((el) => (
            <div className="RoomFriendSelectionItem">
              <input type="checkbox" />
              <RoomFriendListElement el={el} />
            </div>
          ))}
        </div>
      </Scrollbars>
    </RoomSpace>
  );
}

export default RoomEdit;
