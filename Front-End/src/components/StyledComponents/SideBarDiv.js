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

  @media only screen and (max-width: 700px) and (orientation: portrait) {
    width: ${(props) => (!props.isLogged ? "100vw" : "100px")};
    min-width: 100px;
  }

  @media only screen and (max-width: 700px) and (orientation: landscape) {
    width: ${(props) => (!props.isLogged ? "100vw" : "200px")};
    height: auto;
    min-width: 100px;
  }
`;

export default Div;
