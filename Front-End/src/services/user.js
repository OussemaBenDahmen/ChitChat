import Axios from "axios";
import { GetConversation } from "../redux/actions/Conversations/Conversations";
import { DeleteAccount, EditAccount, GetAccount } from "../redux/actions/User";
import { ServerURI } from "./config";

export const UpdateProfileService = (data) => {
  return (dispatch) => {
    dispatch(EditAccount());
    Axios.put(`${ServerURI}/users/user_id=${data._id}`, data, {
      withCredentials: true,
    })
      .then((res) =>
        dispatch({ type: "EDIT_PROFILE_SUCCESS", payload: res.data })
      )
      .catch((err) => {
        dispatch({ type: "EDIT_PROFILE_ERROR", payload: err });
      });
  };
};

export const UpdateStatusService = (id, data) => {
  return (dispatch) => {
    Axios.put(`${ServerURI}/users/status/user_id=${id}`, data, {
      withCredentials: true,
    })
      .then((res) =>
        dispatch({ type: "EDIT_PROFILE_SUCCESS", payload: res.data })
      )
      .catch((err) => {
        dispatch({ type: "EDIT_PROFILE_ERROR", payload: err });
        alert(err.response.data);
      });
  };
};

export const DeleteProfileService = (id) => {
  return (dispatch) => {
    dispatch(DeleteAccount());
    Axios.delete(`${ServerURI}/users/user_id=${id}`, {
      withCredentials: true,
    })
      .then((res) => {
        dispatch({ type: "DELETE_PROFILE_SUCCESS", payload: res.data });
        localStorage.setItem("isLogged", "false");
      })
      .catch((err) => {
        dispatch({ type: "DELETE_PROFILE_ERROR", payload: err });
      });
  };
};

export const GetProfileService = () => {
  return (dispatch) => {
    dispatch(GetAccount());
    Axios.get(`${ServerURI}/users/getLogged`, {
      withCredentials: true,
    })
      .then((res) =>
        dispatch({ type: "GET_PROFILE_SUCCESS", payload: res.data })
      )
      .catch((err) => {
        dispatch({ type: "GET_PROFILE_ERROR", payload: err });
      });
  };
};

export const GetSingleUserConversation = ({ user_id, friend_id }) => {
  return (dispatch) => {
    dispatch(GetConversation());
    Axios.post(
      `${ServerURI}/Users/Conversation_id=${friend_id}`,
      { user_id },
      {
        withCredentials: true,
      }
    )
      .then((res) => {
        dispatch({ type: "GET_CONVERSATION_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "GET_CONVERSATION_ERROR", payload: err });
      });
  };
};
