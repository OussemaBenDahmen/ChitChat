import Axios from "axios";
import {
  BlockFriend,
  GetFriendsList,
  MuteFriend,
} from "../redux/actions/Friends";
import { ServerURI } from "./config";

export const GetFriendListService = (id) => {
  return (dispatch) => {
    dispatch(GetFriendsList());
    Axios.post(
      `${ServerURI}/users/FriendsList`,
      { _id: id },
      {
        withCredentials: true,
      }
    )
      .then((res) =>
        dispatch({ type: "GET_FRIENDLIST_SUCCESS", payload: res.data })
      )
      .catch((err) => {
        dispatch({ type: "GET_FRIENDLIST_ERROR", payload: err });
      });
  };
};

export const MuteFriendService = (data) => {
  return (dispatch) => {
    dispatch(MuteFriend());
    Axios.put(
      `${ServerURI}/Friend_id=${data._id}`,
      {},
      {
        withCredentials: true,
      }
    )
      .then((res) =>
        dispatch({ type: "MUTE_FRIEND_SUCCESS", payload: res.data })
      )
      .catch((err) => {
        dispatch({ type: "MUTE_FRIEND_ERROR", payload: err });
      });
  };
};

export const BlockFriendService = (data) => {
  return (dispatch) => {
    dispatch(BlockFriend());
    Axios.put(
      `${ServerURI}/Friend_id=${data._id}`,
      {},
      {
        withCredentials: true,
      }
    )
      .then((res) =>
        dispatch({ type: "BLOCK_FRIEND_SUCCESS", payload: res.data })
      )
      .catch((err) => {
        dispatch({ type: "BLOCK_FRIEND_ERROR", payload: err });
      });
  };
};
