const initialState = [];

const roomReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ROOMS_SUCCESS":
      return [...action.payload];
    case "CREATE_ROOM_SUCCESS":
      return [...state, action.payload];
    case "EDIT_ROOM_SUCCESS":
      const indx = state.findIndex((el) => el._id == action.payload._id);
      let newState = [...state];
      newState[indx] = action.payload;
      return [...newState];
    case "LEAVE_ROOM_SUCCESS":
      return state.filter((el) => el._id !== action.payload._id);
    case "DELETE_ROOM_SUCCESS":
      return state.filter((el) => el._id !== action.payload._id);
    default:
      return state;
  }
};
export default roomReducer;
