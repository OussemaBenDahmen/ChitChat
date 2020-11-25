import { useState } from "react";
import styled, { keyframes } from "styled-components";
import "./App.css";
import SideBarContainer from "./components/SideBarContainer";

const appear = keyframes`
from {
  opacity: 0;
}
to {
opacity: 1;
}
`;

const MessageSpace = styled.div`
  flex-direction: column;
  width: ${(props) => (props.isLogged ? "80vw" : "0")};
  background-color: red;
  transition: all 1s ease-in-out;
  animation: ${appear} linear 1s;
  /* display: ${(props) => (props.isLogged ? "flex" : "none")}; */
`;

function App() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <div className="App">
      <button
        style={{ position: "absolute", top: "20px" }}
        onClick={() => setIsLogged(!isLogged)}
      >
        Click
      </button>
      <div className="Interface">
        <SideBarContainer isLogged={isLogged} />
        <MessageSpace isLogged={isLogged}>
          <h1>Hello!!</h1>
          <p>I'm here to demonstrate some animation</p>
        </MessageSpace>
      </div>
    </div>
  );
}

export default App;
