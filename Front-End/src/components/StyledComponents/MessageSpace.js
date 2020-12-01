import styled from "styled-components";
import { FadeIn, FadeOut } from "./FadeInOut";

const MessageSpace = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  width: ${(props) => (props.isLogged ? "80vw" : "0")};
  background-color: white;
  transition: all 1s ease-in-out;
  animation: ${(props) => (props.isLogged ? FadeIn : FadeOut)} ease-in-out 1s;
  visibility: ${(props) => (props.isLogged ? "visible" : "hidden")};
`;

export default MessageSpace;
