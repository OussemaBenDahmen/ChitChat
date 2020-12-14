import React from "react";

import { ServerURI } from "../../services/config";
import "./style.css";

function MessageValue({ message }) {
  switch (message.MsgType) {
    case "text":
      return message.Value.includes("www.") ? (
        <a href={`http://${message.Value}`}>{message.Value}</a>
      ) : (
        <div className="MessageTxt">{message.Value}</div>
      );
    case "image":
      return <img src={`${ServerURI}/${message.Value}`} alt="" />;
    case "audio":
      return <audio src={`${ServerURI}/${message.Value}`} controls />;
    case "video":
      return (
        <video src={`${ServerURI}/${message.Value}`} controls width="300" />
      );

    case "file":
      return (
        <iframe
          src={`${ServerURI}/${message.Value}`}
          frameBorder="0"
          title={MessageValue}
        />
      );
    default:
      return;
  }
}

export default MessageValue;
