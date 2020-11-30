const { default: styled } = require("styled-components");

const StatusSwitch = styled.div`
  width: 30px;
  height: 15px;
  margin-left: 10px;
  border: thin solid gray;
  border-radius: 7px;
  background-color: ${(props) => (props.isOnline ? "lime" : "red")};
  display: flex;
  justify-content: ${(props) => (props.isOnline ? "flex-start" : "flex-end")};
  align-items: center;
  cursor: pointer;
  transition: all 500ms ease-in-out;
`;
export default StatusSwitch;
