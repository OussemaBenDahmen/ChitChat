const initialState = [];
const friendsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_FRIENDLIST_SUCCESS":
      return [...action.payload];
    case "LOGOUT_SUCCESS":
      return [];
    default:
      return state;
  }
};
export default friendsListReducer;
