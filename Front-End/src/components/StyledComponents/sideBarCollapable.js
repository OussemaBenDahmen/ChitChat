import styled from "styled-components";
import { FadeInWithoutScale, FadeOutWithoutScale } from "./FadeInOut";

const SideBarCollapsable = styled.div`
  width: 90%;
  height: ${(props) => (props.isOpen ? "100px" : "0px")};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  overflow: hidden;
  transition: all 500ms;
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  transition: all 500ms;
  text-align: left;
`;

export default SideBarCollapsable;
