import React from "react";
import Scrollbars from "react-custom-scrollbars";
import { useHistory } from "react-router-dom";
import RoomFriendListElement from "../FriendElemnt/RoomFriendList";
import RoomSpace from "../StyledComponents/RoomCreatorSpace";
import "./style.css";

function RoomEdit(props) {
  const history = useHistory();
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
          <button className="CancelBtn" onClick={() => history.goBack()}>
            Cancel
          </button>
        </div>
      </header>
      <h2>Choose your Friends</h2>
      <Scrollbars hideTracksWhenNotNeeded>
        <div className="RoomListSelection">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((el, i) => (
            <div className="RoomFriendSelectionItem" key={i}>
              <input type="checkbox" />
              <RoomFriendListElement el={el} />
            </div>
          ))}
        </div>
      </Scrollbars>
      <button className="DeleteBtn">Delete Groupe</button>
    </RoomSpace>
  );
}

export default RoomEdit;
