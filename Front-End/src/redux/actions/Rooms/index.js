import {
  CREATE_ROOM,
  DELETE_ROOM,
  EDIT_ROOM,
  GET_ROOMS,
  GET_SINGLE_ROOM,
  LEAVE_ROOM,
} from "../types";

export const CreateRoom = () => ({
  type: CREATE_ROOM,
});
export const GetRooms = () => ({
  type: GET_ROOMS,
});
export const GetSingleRoom = () => ({
  type: GET_SINGLE_ROOM,
});

export const EditRoom = () => ({
  type: EDIT_ROOM,
});
export const LeaveRoom = () => ({
  type: LEAVE_ROOM,
});
export const DeleteRoom = () => ({
  type: DELETE_ROOM,
});
