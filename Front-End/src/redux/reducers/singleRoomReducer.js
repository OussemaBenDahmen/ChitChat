const initialState = {};

const SingleRoomReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SINGLE_ROOM_SUCCESS":
      return { ...action.payload };

    default:
      return state;
  }
};
export default SingleRoomReducer;
