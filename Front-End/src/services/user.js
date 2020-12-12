import Axios from "axios";
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

export const DeleteProfileService = (data) => {
  return (dispatch) => {
    dispatch(DeleteAccount());
    Axios.delete(`${ServerURI}/user/user_id=${data._id}`, {
      withCredentials: true,
    })
      .then((res) =>
        dispatch({ type: "DELETE_PROFILE_SUCCESS", payload: res.data })
      )
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
