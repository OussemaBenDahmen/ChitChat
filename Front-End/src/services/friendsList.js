import Axios from "axios";
import { GetFriendsList } from "../redux/actions/Friends";
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
        alert(err.response.data);
      });
  };
};
