import Axios from "axios";
import { CreateRoom, DeleteRoom, EditRoom } from "../redux/actions/Rooms";
import { ServerURI } from "./config";

export const CreateRoomService = (data) => {
  dispatch(CreateRoom());
  Axios.post(`${ServerURI}/Room`, data, { withCredentials: true })
    .then((res) =>
      dispatch({
        type: "CREATE_ROOM_SUCCESS",
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch({
        type: "CREATE_ROOM_ERROR",
        payload: err,
      });
    });
};

export const EditRoomService = (data) => {
  dispatch(EditRoom());
  Axios.post(`${ServerURI}/Room_id=${data._id}`, data, {
    withCredentials: true,
  })
    .then((res) =>
      dispatch({
        type: "EDIT_ROOM_SUCCESS",
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch({
        type: "EDIT_ROOM_ERROR",
        payload: err,
      });
    });
};

export const DeleteRoomService = (data) => {
  dispatch(DeleteRoom);
  Axios.delete(`${ServerURI}/Room_id=${data._id}`, {
    withCredentials: true,
  })
    .then((res) =>
      dispatch({
        type: "DELETE_ROOM_SUCCESS",
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch({
        type: "DELETE_ROOM_ERROR",
        payload: err,
      });
    });
};
