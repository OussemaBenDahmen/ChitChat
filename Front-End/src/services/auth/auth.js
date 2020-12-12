import Axios from "axios";
import { Login, Logout } from ".";

import { ServerURI } from "../../services/config";
import { CreateAccount } from "../../redux/actions/User";

export const LogInService = (data) => {
  return (dispatch) => {
    dispatch(Login());
    Axios.post(`${ServerURI}/connect/login`, data, {
      withCredentials: true,
    })
      .then((res) => {
        localStorage.setItem("isLogged", true);
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        dispatch({ type: "SIGNUP_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "LOGIN_ERROR", payload: err });
        console.log(err.response.data);
      });
  };
};

export const LogOutService = (data) => {
  return (dispatch) => {
    dispatch(Logout());
    Axios.post(`${ServerURI}/connect/logout`, data, {
      withCredentials: true,
    })
      .then((res) => {
        localStorage.setItem("isLogged", false);
        dispatch({ type: "LOGOUT_SUCCESS", payload: res.data });
        setTimeout(() => {
          window.location.replace("/SignIn");
        }, 1000);
      })
      .catch((err) => dispatch({ type: "LOGOUT_ERROR", payload: err }));
  };
};

export const SignUpService = (data) => {
  return (dispatch) => {
    dispatch(CreateAccount());
    Axios.post(`${ServerURI}/users/signup`, data, {
      withCredentials: true,
    })
      .then((res) => {
        localStorage.setItem("isLogged", true);
        console.log(res.data);
        dispatch({ type: "SIGNUP_SUCCESS", payload: res.data });
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "SIGNUP_ERROR", payload: err });
        if (err.response.data === "E11000") {
          console.error("username is already used");
          console.log(err);
        }
      });
  };
};
