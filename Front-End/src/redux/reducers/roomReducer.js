const initialState = [];

const roomReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_ROOM_SUCCESS":
      return [...state, ...action.payload];
    case "EDIT_ROOM_SUCCESS":
      const indx = state.indexOf((el) => el._id === action.payload._id);
      const newState = [...state];
      newState[indx] = action.payload;
      return newState;
    case "DELETE_ROOM_SUCCESS":
      return state.filter((el) => el._id !== action.payload._id);
    default:
      return state;
  }
};
export default roomReducer;
