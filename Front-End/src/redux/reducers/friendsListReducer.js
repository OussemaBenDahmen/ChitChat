const initialState = [];
const friendsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_FRIENDLIST_SUCCESS":
      return [...state, ...action.payload];
    case "MUTE_FRIEND_SUCCESS":
      const indx = state.indexOf((el) => el._id === action.payload._id);
      const newState = [...state];
      newState[indx] = action.payload;
      return newState;
    case "BLOCK_FRIEND_SUCCESS":
      return state.filter((el) => el._id !== action.payload._id);

    default:
      return state;
  }
};
export default friendsListReducer;
