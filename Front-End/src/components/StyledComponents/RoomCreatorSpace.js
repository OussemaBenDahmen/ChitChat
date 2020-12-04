import styled from "styled-components";
import { FadeIn, FadeOut } from "./FadeInOut";

const RoomSpace = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  width: ${(props) => (props.isLogged ? "80vw" : "0")};
  background-color: white;
  transition: all 1s ease-in-out;
  animation: ${(props) => (props.isLogged ? FadeIn : FadeOut)} ease-in-out 1s;
  visibility: ${(props) => (props.isLogged ? "visible" : "hidden")};
`;

export default RoomSpace;
