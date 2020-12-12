import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import RoomCreation from "./components/RoomSection/RoomCreation";
import MessageSection from "./components/MessageSection/MessageSection";
import SideBarContainer from "./components/SideBarContainer";
import RoomEdit from "./components/RoomSection/RoomEdit";
import IndividualChatSection from "./components/IndividualChatSection/IndividualChatSection";
import Welcome from "./components/WelcomingSpace/Welcome";
import { useSelector, useDispatch } from "react-redux";
import { GetProfileService } from "./services/user";
import { GetFriendsList } from "./redux/actions/Friends";
import { GetMyRoomsService } from "./services/rooms";

function App() {
  const dispatch = useDispatch();
  const isLogged = localStorage.getItem("isLogged") === "true" ? true : false;
  const [isAccountSectionOpen, setAccountSectionOpen] = useState(false);
  const User = useSelector((state) => state.User);
  const FriendsList = useSelector((state) => state.FriendsList);
  const Rooms = useSelector((state) => state.Rooms);
  const SingleRoom = useSelector((state) => state.SingleRoom);

  useEffect(() => {
    dispatch(GetProfileService());
    dispatch(GetFriendsList(User));
    dispatch(GetMyRoomsService(User));
  }, [dispatch]);
  return (
    <div className="App">
      <Router>
        <div className="Interface">
          <SideBarContainer
            isLogged={isLogged}
            isAccountSectionOpen={isAccountSectionOpen}
            setAccountSectionOpen={setAccountSectionOpen}
          />

          <Switch>
            <Route path="/Create_Room">
              <RoomCreation isLogged={isLogged} />
            </Route>
            <Route path="/Edit_Room">
              <RoomEdit isLogged={isLogged} myRoom={SingleRoom} />
            </Route>
            {Rooms.map((el, i) => (
              <Route path={`/Room_id=${el._id}`} exact key={i}>
                <MessageSection
                  User={User}
                  el={el}
                  isLogged={isLogged}
                  isAccountSectionOpen={isAccountSectionOpen}
                  setAccountSectionOpen={setAccountSectionOpen}
                />
              </Route>
            ))}
            {FriendsList.map((el, i) => (
              <Route path={`/Chat_id=${el._id}`} exact key={i}>
                <IndividualChatSection
                  User={User}
                  el={el}
                  isLogged={isLogged}
                  isAccountSectionOpen={isAccountSectionOpen}
                  setAccountSectionOpen={setAccountSectionOpen}
                />
              </Route>
            ))}
            <Route path="/">
              <Welcome
                User={User}
                isLogged={isLogged}
                isAccountSectionOpen={isAccountSectionOpen}
                setAccountSectionOpen={setAccountSectionOpen}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
