import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Loader from "../Loader/Loader";
import SideLinks from "../SideBar-Links/SideLinks";
import SignUpAndSignIn from "../SignUp-SignIn";
import Div from "../StyledComponents/SideBarDiv";
import "./style.css";

function SideBarContainer(props) {
  const history = useHistory();

  const redirectUser = (log) => {
    if (
      history.location.pathname !== "/" &&
      history.location.pathname !== "/SignIn" &&
      !log
    ) {
      history.push("/SignIn");
    }
  };

  useEffect(() => {
    redirectUser(props.isLogged);
  }, [props.isLogged]);

  return (
    <Div isLogged={props.isLogged}>
      <div className="SideBar-SubContainer">
        {props.isLogged ? (
          <Loader
            component={
              <SideLinks
                isOpen={props.isOpen}
                setIsOpen={props.setIsOpen}
                setIsLogged={props.setIsLogged}
                isAccountSectionOpen={props.isAccountSectionOpen}
                setAccountSectionOpen={props.setAccountSectionOpen}
              />
            }
          />
        ) : (
          <SignUpAndSignIn />
        )}
      </div>
    </Div>
  );
}

export default SideBarContainer;
