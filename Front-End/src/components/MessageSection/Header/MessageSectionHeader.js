import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  GetSingleRoomService,
  LeaveRoomService,
} from "../../../services/rooms";
import DropDown from "../../StyledComponents/DropdownDiv";

function MessageSectionHeader(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(GetSingleRoomService(props.el._id));
  }, [dispatch]);
  return (
    <header className="MessageSectionHeader">
      <h2 className="RoomName-FriendName"># {props.el.RoomName}</h2>
      <div className="DropDown">
        <button
          className="MessageSectionHeaderDropDownBtn"
          onClick={() => props.setIsDropDownOpen(!props.isDropDownOpen)}
        >
          <i className="fa fa-ellipsis-v"></i>
        </button>
        <DropDown isOpen={props.isDropDownOpen}>
          {props.el.RoomCreator._id === props.User._id ? (
            <Link
              room={props.el}
              to="/Edit_Room"
              className="MessageSectionDropDownContent"
              onClick={() => {
                props.setIsDropDownOpen(false);
              }}
            >
              Edit Room
            </Link>
          ) : (
            <button
              className="MessageSectionDropDownContent"
              onClick={() => {
                dispatch(
                  LeaveRoomService({ Room_id: props.el._id, User: props.User })
                );
                history.goBack();
              }}
            >
              Leave Room
            </button>
          )}
        </DropDown>
      </div>
    </header>
  );
}

export default MessageSectionHeader;
