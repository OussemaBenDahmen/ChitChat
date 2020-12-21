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
  width: 100%;
  min-height: 60px;
  margin: 20px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  animation: ${MessageAnimation} 500ms ease-in-out 1;
  padding-bottom: 15px;
  border-bottom: thin solid gray;
  @media only screen and (max-width: 600px) and (orientation: portrait) {
    flex-direction: column;
    padding-left: 15px;
    margin-left: 0;
    align-items: flex-start;
  }
`;

export default MessageElement;
