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

function App() {
  const [isLogged, setIsLogged] = useState(true);
  const [isAccountSectionOpen, setAccountSectionOpen] = useState(false);
  return (
    <div className="App">
      <Router>
        <button
          style={{ position: "absolute", right: "20px", zIndex: "1231351" }}
          onClick={() => setIsLogged(!isLogged)}
        >
          Click
        </button>
        <div className="Interface">
          <SideBarContainer
            isLogged={isLogged}
            setIsLogged={setIsLogged}
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
                  el={el}
                  isLogged={isLogged}
                  setIsLogged={setIsLogged}
                  isAccountSectionOpen={isAccountSectionOpen}
                  setAccountSectionOpen={setAccountSectionOpen}
                />
              </Route>
            ))}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((el, i) => (
              <Route path={`/Chat_id=${el}`} exact key={i}>
                <IndividualChatSection
                  el={el}
                  isLogged={isLogged}
                  setIsLogged={setIsLogged}
                  isAccountSectionOpen={isAccountSectionOpen}
                  setAccountSectionOpen={setAccountSectionOpen}
                />
              </Route>
            ))}
            <Route path="/">
              <Welcome
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
