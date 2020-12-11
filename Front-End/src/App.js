import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import RoomCreation from "./components/RoomSection/RoomCreation";
import MessageSection from "./components/MessageSection/MessageSection";
import SideBarContainer from "./components/SideBarContainer";
import RoomEdit from "./components/RoomSection/RoomEdit";
import IndividualChatSection from "./components/IndividualChatSection/IndividualChatSection";
import MessageSpace from "./components/StyledComponents/MessageSpace";
import Welcome from "./components/WelcomingSpace/Welcome";
import { useSelector } from "react-redux";

function App() {
  const isLogged = useSelector((state) => state.isLogged);
  const [isAccountSectionOpen, setAccountSectionOpen] = useState(false);
  const User = useSelector((state) => state.User);
  const FriendsList = useSelector((state) => state.FriendsList);
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
              <RoomEdit isLogged={isLogged} />
            </Route>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((el, i) => (
              <Route path={`/Room_id=${el}`} exact key={i}>
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
