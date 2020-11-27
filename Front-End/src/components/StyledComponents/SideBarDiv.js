import styled from "styled-components";
const Div = styled.div`
  background: url("https://my-live-01.slatic.net/p/cc087eee9d580ed61330cc8186cb1198.jpg_1200x1200q80.jpg")
    no-repeat;
  background-size: cover;
  height: 100vh;
  width: ${(props) => (props.isLogged ? "300px" : "100vw")};
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 1s ease-in-out;
`;

export default Div;
