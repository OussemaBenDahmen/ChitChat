import { SendMessageSocket } from "../Socket-Io-Client";

const Axios = require("axios");

const { UploadFile } = require("../redux/actions/uploadFile");
const { ServerURI } = require("./config");

export const UploadImgService = (file, id) => {
  return (dispatch) => {
    dispatch(UploadFile());
    Axios.post(ServerURI + "/Upload//ProfilePic/user_id=" + id, file, {
      withCredentials: true,
    })
      .then((res) => {
        dispatch({ type: "UPLOAD_IMG_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "UPLOAD_IMG_ERROR", payload: err });
      });
  };
};

export const UploadMsgFileService = (file, message) => {
  return (dispatch) => {
    dispatch(UploadFile());
    Axios.post(ServerURI + "/Upload/file", file, {
      withCredentials: true,
    })
      .then((res) => {
        dispatch({ type: "UPLOAD_FILE_SUCCESS", payload: res.data });
        SendMessageSocket(message);
      })
      .catch((err) => {
        alert("File might be too large, your file should be less than 40MB");
        dispatch({ type: "UPLOAD_FILE_ERROR", payload: err });
      });
  };
};
