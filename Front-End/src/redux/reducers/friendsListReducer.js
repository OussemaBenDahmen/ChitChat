const initialState = [];
const friendsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_FRIENDLIST_SUCCESS":
      return [...action.payload];

    default:
      return state;
  }
};
export default friendsListReducer;
