import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AccountSideBarComponent from "../AccountSideBarComponent/AccountSideBarComponent";
import Loader from "../Loader/Loader";
import MessageSectionFooter from "../MessageSection/Footer/MessageSectionFooter";
import MessageSectionMain from "../MessageSection/Main/MessageSectionMain";
import MessageSpace from "../StyledComponents/MessageSpace";
import IndividualChatSectionHeader from "./Header/IndividualChatSectionHeader";
import { GetSingleUserConversation } from "../../services/user";
import "./style.css";
import { socket } from "../../Socket-Io-Client";

function IndividualChatSection(props) {
  const dispatch = useDispatch();
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const Conversation = useSelector((state) => state.Conversation);

  useEffect(() => {
    dispatch(
      GetSingleUserConversation({
        user_id: props.User._id,
        friend_id: props.el._id,
      })
    );
  }, [dispatch, props.el]);

  useEffect(() => {
    socket.on("MessageUpdate", (data) => {
      dispatch({ type: "GET_CONVERSATION_SUCCESS", payload: data });
    });
  }, [dispatch, socket]);

  return (
    <MessageSpace isLogged={props.isLogged}>
      <IndividualChatSectionHeader
        el={props.el}
        isDropDownOpen={isDropDownOpen}
        setIsDropDownOpen={setIsDropDownOpen}
      />
      <Loader
        component={
          Conversation.Messages && Conversation.Messages.length > 0 ? (
            <MessageSectionMain Conversation={Conversation} />
          ) : (
            <p className="MessageSectionMain">
              You have no messages <strong>Say Hi!!</strong>
            </p>
          )
        }
      />
      {props.isLogged ? (
        <MessageSectionFooter
          Friend={props.el}
          User={props.User}
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

export default IndividualChatSection;
