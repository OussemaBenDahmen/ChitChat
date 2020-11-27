import { FadeInWithoutScale, FadeOutWithoutScale } from "./FadeInOut";

const { default: styled } = require("styled-components");

const DropDown = styled.div`
  z-index: 454;
  position: absolute;
  top: 60px;
  right: 15px;
  border-radius: 2px;
  background: rgba(135, 130, 140, 0.568);
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.868);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  overflow: hidden;
  width: 150px;
  height: ${(props) => (props.isOpen ? "100px" : 0)};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  animation: ${(props) =>
      props.isOpen ? FadeInWithoutScale : FadeOutWithoutScale}
    linear 500ms;
  transition: all 500ms;
`;

export default DropDown;
