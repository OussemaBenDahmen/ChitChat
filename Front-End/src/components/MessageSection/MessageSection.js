import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { socket } from "../../Socket-Io-Client";
import AccountSideBarComponent from "../AccountSideBarComponent/AccountSideBarComponent";
import Loader from "../Loader/Loader";
import MessageSpace from "../StyledComponents/MessageSpace";
import MessageSectionFooter from "./Footer/MessageSectionFooter";
import MessageSectionHeader from "./Header/MessageSectionHeader";
import MessageSectionMain from "./Main/MessageSectionMain";
import "./style.css";

function MessageSection(props) {
  const dispatch = useDispatch();
  const [trigger, setTrigger] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const Conversation = useSelector((state) => state.Conversation);

  useEffect(() => {
    socket.on("MessageUpdate", (data) => {
      dispatch({ type: "GET_CONVERSATION_SUCCESS", payload: data });
    });
  }, [dispatch, socket]);
  return (
    <MessageSpace isLogged={props.isLogged}>
      <MessageSectionHeader
        User={props.User}
        el={props.el}
        isDropDownOpen={isDropDownOpen}
        setIsDropDownOpen={setIsDropDownOpen}
      />
      <Loader
        component={
          Conversation.Messages && Conversation.Messages.length > 0 ? (
            <MessageSectionMain
              Conversation={Conversation}
              trigger={trigger}
              setTrigger={setTrigger}
            />
          ) : (
            <p className="MessageSectionMain">
              You have no messages <strong>Say Hi!!</strong>
            </p>
          )
        }
      />
      {props.isLogged ? (
        <MessageSectionFooter
          setTrigger={setTrigger}
          User={props.User}
          Room={props.el}
          Conversation={Conversation}
        />
      ) : null}
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
