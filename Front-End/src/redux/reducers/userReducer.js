const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP_SUCCESS":
      return { ...action.payload };
    case "GET_PROFILE_SUCCESS":
      return { ...action.payload };
    case "EDIT_PROFILE_SUCCESS":
      return { ...action.payload };
    case "UPLOAD_IMG_SUCCESS":
      return { ...action.payload };
    case "DELETE_PROFILE_SUCCESS":
      return {};
    case "LOGOUT_SUCCESS":
      return {};
    default:
      return state;
  }
};

export default userReducer;
