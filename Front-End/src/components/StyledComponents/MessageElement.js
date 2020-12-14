const { default: styled, keyframes } = require("styled-components");

const MessageAnimation = keyframes`
from {
    opacity:0;
}
to {
    opacity:1;
}
`;

const MessageElement = styled.div`
  width: 90%;
  min-height: 60px;
  margin: 20px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  animation: ${MessageAnimation} 500ms ease-in-out 1;
`;

export default MessageElement;
