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
