import { combineReducers } from "redux";
import isLogged from "./authReducer";
import friendsListReducer from "./friendsListReducer";
import roomReducer from "./roomReducer";
import SingleRoomReducer from "./singleRoomReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  isLogged,
  User: userReducer,
  FriendsList: friendsListReducer,
  Rooms: roomReducer,
  SingleRoom: SingleRoomReducer,
});
export default rootReducer;
