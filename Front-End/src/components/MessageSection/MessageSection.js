import React, { useState } from "react";
import AccountSideBarComponent from "../AccountSideBarComponent/AccountSideBarComponent";
import MessageSpace from "../StyledComponents/MessageSpace";
import MessageSectionFooter from "./Footer/MessageSectionFooter";
import MessageSectionHeader from "./Header/MessageSectionHeader";
import MessageSectionMain from "./Main/MessageSectionMain";
import "./style.css";

function MessageSection(props) {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  return (
    <MessageSpace isLogged={props.isLogged}>
      <MessageSectionHeader
        el={props.el}
        isDropDownOpen={isDropDownOpen}
        setIsDropDownOpen={setIsDropDownOpen}
      />
      <MessageSectionMain />
      {props.isLogged ? <MessageSectionFooter /> : null}
      <AccountSideBarComponent
        User={props.User}
        isAccountSectionOpen={props.isAccountSectionOpen}
        setAccountSectionOpen={props.setAccountSectionOpen}
        isLogged={props.isLogged}
        setIsLogged={props.setIsLogged}
      />
    </MessageSpace>
  );
}

export default MessageSection;
