import React, { useState } from "react";
import Scrollbars from "react-custom-scrollbars";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { DeleteRoomService, EditRoomService } from "../../services/rooms";
import RoomFriendListElement from "../FriendElemnt/RoomFriendList";
import RoomSpace from "../StyledComponents/RoomCreatorSpace";
import "./style.css";

function RoomEdit(props) {
  const dispatch = useDispatch();
  const User = useSelector((state) => state.User);
  const [SelecteUsers, setSelecteUsers] = useState(
    props.myRoom.UsersList || []
  );
  const [Room, setRoom] = useState(props.myRoom);
  const FriendsList = useSelector((state) => state.FriendsList);
  const history = useHistory();

  const handleChange = (e) => {
    Room[e.target.name] = e.target.value;
    setRoom(Room);
  };

  const EditRoomFunction = () => {
    Room.UsersList = SelecteUsers;
    if (Room.RoomName !== "" && Room.UsersList !== []) {
      Room.RoomCreator = User;
      dispatch(EditRoomService(Room));
      history.goBack();
    } else {
      alert("Test Alert");
    }
  };

  return (
    <RoomSpace isLogged={props.isLogged}>
      <header className="RoomSpaceHeader">
        <h2>Edit Room</h2>
        <input
          name="RoomName"
          className="FormInput RoomNameInput"
          type="text"
          placeholder="Room Name"
          defaultValue={props.myRoom.RoomName}
          required
          onChange={handleChange}
        />
        <div>
          <button className="CreateRoomBtn" onClick={() => EditRoomFunction()}>
            Save
          </button>
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
              <input
                type="checkbox"
                checked={
                  SelecteUsers.some((user) => user._id === el._id)
                    ? true
                    : false
                }
                onChange={(e) => {
                  let isChecked = e.target.checked;
                  if (isChecked) {
                    setSelecteUsers([...SelecteUsers, el]);
                  } else {
                    e.target.checked = false;
                    let filtered = SelecteUsers.filter(
                      (User) => User._id !== el._id
                    );
                    setSelecteUsers(filtered);
                  }
                }}
              />
              <RoomFriendListElement el={el} />
            </div>
          ))}
        </div>
      </Scrollbars>
      <button
        className="DeleteBtn"
        onClick={() => {
          dispatch(DeleteRoomService(props.myRoom));
          history.push("/");
        }}
      >
        Delete Groupe
      </button>
    </RoomSpace>
  );
}

export default RoomEdit;
