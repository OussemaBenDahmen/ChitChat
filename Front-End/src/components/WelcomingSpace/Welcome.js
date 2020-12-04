import React from "react";
import MessageSpace from "../StyledComponents/MessageSpace";
import ChitChatLogo from "../../assets/ChitChatLogo.png";
import AccountSideBarComponent from "../AccountSideBarComponent/AccountSideBarComponent";

function Welcome(props) {
  return (
    <MessageSpace isLogged={props.isLogged}>
      <img src={ChitChatLogo} alt="Logo of the chat app" />
      <h1>Hello and welcome to ChitChat</h1>
      <p>Select a Room or a Friend and start ChitChatting !!</p>
      <AccountSideBarComponent
        isAccountSectionOpen={props.isAccountSectionOpen}
        setAccountSectionOpen={props.setAccountSectionOpen}
        isLogged={props.isLogged}
        setIsLogged={props.setIsLogged}
      />
    </MessageSpace>
  );
}

export default Welcome;
