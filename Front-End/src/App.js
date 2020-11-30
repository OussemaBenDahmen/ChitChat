import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import RoomCreation from "./components/RoomSection/RoomCreation";
import MessageSection from "./components/MessageSection/MessageSection";

import SideBarContainer from "./components/SideBarContainer";
import RoomEdit from "./components/RoomSection/RoomEdit";

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
            <Route path="/">
              <MessageSection
                isLogged={isLogged}
                setIsLogged={setIsLogged}
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
