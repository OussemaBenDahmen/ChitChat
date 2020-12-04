const initialState = false;

const isLogged = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return true;
    case "LOGOUT_SUCCESS":
      return false;
    default:
      return state;
  }
};

export default isLogged;
