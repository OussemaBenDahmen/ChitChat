import React from "react";
import { ServerURI } from "../../services/config";

function FriendListElement(props) {
  return (
    <div className="SideBarFriendElement">
      <i
        className={`fa fa-circle ${
          props.el.Status === "Online" ? "Online" : "Offline"
        }`}
      ></i>
      <img
        className="SideBarFriendImg"
        src={ServerURI + "/" + props.el.picture}
        alt="Friend"
      />
      <h4>{props.el.UserName}</h4>
    </div>
  );
}

export default FriendListElement;
