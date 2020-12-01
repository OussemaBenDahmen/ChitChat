import Axios from "axios";
import { DeleteAccount, EditAccount } from "../redux/actions/User";
import { ServerURI } from "./config";

export const UpdateProfileService = (data) => {
  dispatch(EditAccount());
  Axios.put(`${ServerURI}/users_id=${data._id}`, data, {
    withCredentials: true,
  })
    .then((res) =>
      dispatch({ type: "EDIT_PROFILE_SUCCESS", payload: res.data })
    )
    .catch((err) => {
      dispatch({ type: "EDIT_PROFILE_ERROR", payload: err });
    });
};

export const DeleteProfileService = (data) => {
  dispatch(DeleteAccount());
  Axios.delete(`${ServerURI}/users_id=${data._id}`, {
    withCredentials: true,
  })
    .then((res) =>
      dispatch({ type: "DELETE_PROFILE_SUCCESS", payload: res.data })
    )
    .catch((err) => {
      dispatch({ type: "DELETE_PROFILE_ERROR", payload: err });
    });
};

export const GetProfileService = (data) => {
  dispatch(EditAccount());
  Axios.get(`${ServerURI}/users_id=${data._id}`, {
    withCredentials: true,
  })
    .then((res) => dispatch({ type: "GET_PROFILE_SUCCESS", payload: res.data }))
    .catch((err) => {
      dispatch({ type: "GET_PROFILE_ERROR", payload: err });
    });
};
