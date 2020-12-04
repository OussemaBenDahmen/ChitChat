import { combineReducers } from "redux";
import isLogged from "./authReducer";
import friendsListReducer from "./friendsListReducer";
import roomReducer from "./roomReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  isLogged,
  User: userReducer,
  FriendsList: friendsListReducer,
  Rooms: roomReducer,
});
export default rootReducer;
