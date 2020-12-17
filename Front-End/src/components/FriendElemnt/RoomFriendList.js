import React from "react";
import { ServerURI } from "../../services/config";

function RoomFriendListElement(props) {
  return (
    <div className="SideBarFriendElement">
      <img
        className="SideBarFriendImg"
        src={`${ServerURI}/${props.el.picture}`}
        alt="Friend"
      />
      <h5 style={{ color: "black" }}>{props.el.UserName}</h5>
    </div>
  );
}

export default RoomFriendListElement;
