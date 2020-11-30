import React from "react";

function RoomFriendListElement(props) {
  return (
    <div className="SideBarFriendElement">
      <img
        className="SideBarFriendImg"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6DwG_7wDljpyRLG-iFOmqPDI-LJtR1-cqTQ&usqp=CAU"
        alt="Friend"
      />
      <h5 style={{ color: "black" }}>Friend {props.el}</h5>
    </div>
  );
}

export default RoomFriendListElement;
