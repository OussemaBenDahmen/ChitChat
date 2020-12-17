import React from "react";

import { ServerURI } from "../../services/config";
import FileTypeMessage from "./FileTypeMessage";
import "./style.css";

function MessageValue({ message }) {
  switch (message.MsgType) {
    case "text":
      let splits = message.Value.split(" ");
      splits = splits.map((el) => {
        if (el.includes("www.")) {
          el = (
            <a href={`http://${el}`} target="_blank" rel="noopener noreferrer">
              {" " + el + " "}
            </a>
          );
        } else {
          el = el;
        }
        return el;
      });

      return <div className="MessageTxt">{splits}</div>;

    case "image":
      return <img src={`${ServerURI}/${message.Value}`} alt="" width="300px" />;
    case "audio":
      return <audio src={`${ServerURI}/${message.Value}`} controls />;
    case "video":
      return (
        <video src={`${ServerURI}/${message.Value}`} controls width="300" />
      );

    case "file":
      return <FileTypeMessage message={message} />;
    default:
      return;
  }
}

export default MessageValue;