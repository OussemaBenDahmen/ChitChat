const { default: styled } = require("styled-components");

const AccountSideBarBackDrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: ${(props) => (props.isOpen ? "78.2vw" : "0")};
  background: none;
  backdrop-filter: ${(props) =>
    props.isOpen ? "blur(1px) brightness(0.8)" : "blur(0)"};
  transition: all 1s;
`;

export default AccountSideBarBackDrop;
