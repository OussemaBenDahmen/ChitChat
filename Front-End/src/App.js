import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import MessageSection from "./components/MessageSection/MessageSection";

import SideBarContainer from "./components/SideBarContainer";
import AccountSideBar from "./components/StyledComponents/AccountSideBar";
import DropDown from "./components/StyledComponents/DropdownDiv";
import MessageSpace from "./components/StyledComponents/MessageSpace";

function App() {
  const [isLogged, setIsLogged] = useState(true);
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
          <SideBarContainer isLogged={isLogged} />
          <MessageSection isLogged={isLogged} />
        </div>
      </Router>
    </div>
  );
}

export default App;
