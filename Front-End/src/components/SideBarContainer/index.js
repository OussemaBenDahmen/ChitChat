import React from "react";
import styled from "styled-components";
import "./style.css";

const Div = styled.div`
  background: url("https://my-live-01.slatic.net/p/cc087eee9d580ed61330cc8186cb1198.jpg_1200x1200q80.jpg")
    no-repeat;
  background-size: cover;
  height: 100vh;
  width: ${(props) => (props.isLogged ? "20vw" : "100vw")};
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 1s ease-in-out;
`;

function SideBarContainer(props) {
  return (
    <Div isLogged={props.isLogged}>
      <div className="SideBar-SubContainer">
        {[1, 2, 3, 4, 5].map((el, i) => (
          <div key={i}>Element {el}</div>
        ))}
      </div>
    </Div>
  );
}

export default SideBarContainer;
