import React from "react";
import Loader from "../Loader/Loader";
import SideLinks from "../SideBar-Links/SideLinks";
import SignUpAndSignIn from "../SignUp-SignIn";
import Div from "../StyledComponents/SideBarDiv";
import "./style.css";

function SideBarContainer(props) {
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
