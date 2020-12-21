import React, { useEffect, useRef } from "react";
import Scrollbars from "react-custom-scrollbars";
import { ServerURI } from "../../../services/config";
import MessageValue from "../../MessageValue/MessageValue";
import MessageElement from "../../StyledComponents/MessageElement";

function MessageSectionMain(props) {
  const BottomDiv = useRef();
  useEffect(() => {
    BottomDiv.current.scrollIntoView(false);
  }, [props.Conversation.Messages]);
  return (
    <main className="MessageSectionMain">
      <Scrollbars autoHide hideTracksWhenNotNeeded>
        {props.Conversation.Messages.map((el, i) => (
          <MessageElement key={i}>
            <img
              className="MessageElementImage"
              src={`${ServerURI}/${el.SenderId.picture}`}
              alt="UserImage"
            />

            <div className="MessageElementContent">
              <div className="MessageSenderNameAndDate">
                <h4 className="MessageSenderName">{el.SenderId.UserName}</h4>
                <h5 className="MessageDate">
                  {el.Date.substring(0, 10) + "/" + el.Date.substring(11, 16)}
                </h5>
              </div>
              <MessageValue message={el} />
            </div>
          </MessageElement>
        ))}
        <div ref={BottomDiv}></div>
      </Scrollbars>
    </main>
  );
}

export default MessageSectionMain;
