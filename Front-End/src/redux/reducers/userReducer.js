const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP_SUCCESS":
      return { ...state, ...action.payload };
    case "EDIT_PROFILE_SUCCESS":
      return { ...action.payload };
    case "DELETE_PROFILE_SUCCESS":
      return {};
    default:
      return state;
  }
};

export default userReducer;
