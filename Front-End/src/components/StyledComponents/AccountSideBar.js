const { default: styled } = require("styled-components");

const AccountSideBar = styled.div`
  position: fixed;
  right: 0;
  z-index: 3333333;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  transition: all 500ms;
  background: white;
  height: 100vh;
  width: ${(props) => (props.isOpen ? "300px" : "0px")};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  @media only screen and (max-width: 600px) {
    width: ${(props) => (props.isOpen ? "100vw" : "0")};
  }
`;

export default AccountSideBar;
