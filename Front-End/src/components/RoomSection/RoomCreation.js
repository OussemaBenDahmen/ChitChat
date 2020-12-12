import React, { useState } from "react";
import Scrollbars from "react-custom-scrollbars";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { CreateRoomService } from "../../services/rooms";
import RoomFriendListElement from "../FriendElemnt/RoomFriendList";
import RoomSpace from "../StyledComponents/RoomCreatorSpace";
import "./style.css";

function RoomCreation(props) {
  const dispatch = useDispatch();
  const User = useSelector((state) => state.User);
  const [SelecteUsers, setSelecteUsers] = useState([]);
  const [Room, setRoom] = useState({
    RoomName: "",
    UsersList: SelecteUsers,
    RoomCreator: {},
  });
  const FriendsList = useSelector((state) => state.FriendsList);
  const history = useHistory();
  const handleChange = (e) => {
    Room[e.target.name] = e.target.value;
    setRoom(Room);
  };
  const CreateRoomFunction = () => {
    Room.UsersList = SelecteUsers;
    console.log(Room);
    if (Room.RoomName !== "" && Room.UsersList !== []) {
      Room.RoomCreator = User;
      dispatch(CreateRoomService(Room));
      history.goBack();
    } else {
      alert("Test Alert");
    }
  };
  return (
    <RoomSpace isLogged={props.isLogged}>
      <header className="RoomSpaceHeader">
        <h2>Create Room</h2>
        <input
          name="RoomName"
          className="FormInput RoomNameInput"
          type="text"
          placeholder="Room Name"
          required
          onChange={handleChange}
        />
        <div>
          <button
            className="CreateRoomBtn"
            onClick={() => CreateRoomFunction()}
          >
            Create
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
                onChange={(e) => {
                  let isChecked = e.target.checked;
                  if (isChecked) {
                    setSelecteUsers([...SelecteUsers, el]);
                  } else {
                    let filtered = SelecteUsers.filter((User) => User !== el);
                    setSelecteUsers(filtered);
                  }
                }}
              />
              <RoomFriendListElement el={el} />
            </div>
          ))}
        </div>
      </Scrollbars>
    </RoomSpace>
  );
}

export default RoomCreation;
