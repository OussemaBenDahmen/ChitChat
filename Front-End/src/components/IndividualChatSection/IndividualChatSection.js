import React, { useState } from "react";
import AccountSideBarComponent from "../AccountSideBarComponent/AccountSideBarComponent";
import MessageSectionFooter from "../MessageSection/Footer/MessageSectionFooter";
import MessageSectionMain from "../MessageSection/Main/MessageSectionMain";
import MessageSpace from "../StyledComponents/MessageSpace";
import IndividualChatSectionHeader from "./Header/IndividualChatSectionHeader";
import "./style.css";

function IndividualChatSection(props) {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  return (
    <MessageSpace isLogged={props.isLogged}>
      <IndividualChatSectionHeader
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

export default IndividualChatSection;
