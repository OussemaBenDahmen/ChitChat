import React from "react";

function FriendListElement(props) {
  return (
    <div className="SideBarFriendElement">
      <i className={`fa fa-circle ${props.el % 2 ? "Online" : "Offline"}`}></i>
      <img
        className="SideBarFriendImg"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6DwG_7wDljpyRLG-iFOmqPDI-LJtR1-cqTQ&usqp=CAU"
        alt="Friend"
      />
      <h4>Friend {props.el}</h4>
    </div>
  );
}

export default FriendListElement;
