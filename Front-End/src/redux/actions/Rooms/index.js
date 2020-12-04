import {
  CREATE_ROOM,
  DELETE_ROOM,
  EDIT_ROOM,
  GET_ROOMS,
  LEAVE_ROOM,
} from "../Types";

export const CreateRoom = () => ({
  type: CREATE_ROOM,
});
export const GetRooms = () => ({
  type: GET_ROOMS,
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
