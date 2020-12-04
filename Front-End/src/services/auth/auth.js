import Axios from "axios";
import { Login, Logout } from ".";
import { CreateAccount } from "../User";
import { ServerURI } from "../../../services/config";

export const LogInService = (data) => {
  return (dispatch) => {
    dispatch(Login());
    Axios.post(`${ServerURI}/connect`, data, {
      withCredentials: true,
    })
      .then((res) => dispatch({ type: "LOGIN_SUCCESS", payload: res.data }))
      .catch((err) => dispatch({ type: "LOGIN_ERROR", payload: err }));
  };
};

export const LogOutService = (data) => {
  return (dispatch) => {
    dispatch(Logout());
    Axios.post(`${ServerURI}/connect`, data, {
      withCredentials: true,
    })
      .then((res) => dispatch({ type: "LOGOUT_SUCCESS", payload: res.data }))
      .catch((err) => dispatch({ type: "LOGOUT_ERROR", payload: err }));
  };
};

export const SignUpService = (data) => {
  return (dispatch) => {
    dispatch(CreateAccount());
    Axios.post(`${ServerURI}/connect`, data, {
      withCredentials: true,
    })
      .then((res) => {
        dispatch({ type: "SIGNUP_SUCCESS", payload: res.data });
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      })
      .catch((err) => dispatch({ type: "SIGNUP_ERROR", payload: err }));
  };
};
