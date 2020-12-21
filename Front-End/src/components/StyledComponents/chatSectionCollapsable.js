import styled from "styled-components";

const ChatSectionCollapsable = styled.div`
  height: 100%;
  width: ${(props) => (props.isOpen ? "110px" : "0")};
  overflow: hidden;
  transition: all 500ms;
`;

export default ChatSectionCollapsable;
