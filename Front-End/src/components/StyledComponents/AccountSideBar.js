const { default: styled } = require("styled-components");

const AccountSideBar = styled.div`
  position: fixed;
  right: 0;
  z-index: 3333333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 500ms;
  background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPG69i_M4RUj0GeJZxdtYJHBBVCk34yUkfwQ&usqp=CAU")
    no-repeat;
  background-size: cover;
  height: 100vh;
  width: ${(props) => (props.isOpen ? "300px" : "0px")};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
`;

export default AccountSideBar;
