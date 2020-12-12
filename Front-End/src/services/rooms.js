import Axios from "axios";
import {
  CreateRoom,
  DeleteRoom,
  EditRoom,
  GetRooms,
  GetSingleRoom,
} from "../redux/actions/Rooms";
import { ServerURI } from "./config";

export const GetMyRoomsService = (data) => {
  return (dispatch) => {
    dispatch(GetRooms());
    Axios.post(`${ServerURI}/Rooms/GetAll`, data, {
      withCredentials: true,
    })
      .then((res) => {
        dispatch({ type: "GET_ROOMS_SUCCESS", payload: res.data });
      })
      .catch((err) => dispatch({ type: "GET_ROOMS_ERROR", payload: err }));
  };
};

export const GetSingleRoomService = (id) => {
  return (dispatch) => {
    dispatch(GetSingleRoom());
    Axios.get(`${ServerURI}/Rooms/Room_id=${id}`, {
      withCredentials: true,
    })
      .then((res) => {
        dispatch({ type: "GET_SINGLE_ROOM_SUCCESS", payload: res.data });
      })
      .catch((err) =>
        dispatch({ type: "GET_SINGLE_ROOM_ERROR", payload: err })
      );
  };
};

export const CreateRoomService = (data) => {
  return (dispatch) => {
    dispatch(CreateRoom());
    Axios.post(`${ServerURI}/Rooms/Create`, data, { withCredentials: true })
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
};

export const EditRoomService = (data) => {
  return (dispatch) => {
    dispatch(EditRoom());
    Axios.put(`${ServerURI}/Rooms/Room_id=${data._id}`, data, {
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
};

export const DeleteRoomService = (data) => {
  return (dispatch) => {
    dispatch(DeleteRoom);
    Axios.delete(`${ServerURI}/Rooms/Room_id=${data._id}`, {
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
};
