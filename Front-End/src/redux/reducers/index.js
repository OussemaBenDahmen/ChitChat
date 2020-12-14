import { combineReducers } from "redux";
import isLogged from "./authReducer";
import ConversationReducer from "./ConversationReducer";
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
  Conversation: ConversationReducer,
});
export default rootReducer;
