import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { SendMessageSocket } from "../../../Socket-Io-Client";
import { UploadMsgFileService } from "../../../services/fileUpload";

function MessageSectionFooter(props) {
  const dispatch = useDispatch();
  const FileUpload = useRef();
  const MessageInput = useRef();
  const [Message, setMessage] = useState({ Value: "" });
  const handleChange = (e) => {
    Message.Value = e.target.value;
    setMessage(Message);
  };
  const SendMessage = () => {
    if (Message.Value !== "") {
      Message.SenderId = props.User;
      Message.MsgType = "text";
      let destination;
      if (props.Friend && props.Friend.UserName) {
        destination = "individual";
      } else {
        destination = "room";
      }
      SendMessageSocket({
        Message,
        Reciever: props.Friend || props.Room,
        destination,
        Conversation: props.Conversation,
      });
      Message.Value = "";
      setMessage(Message);
    }
  };
  const SendFile = (e) => {
    Message.Value = e.target.files[0].name;
    Message.SenderId = props.User;

    const Mytype = e.target.files[0].type;
    const fd = new FormData();
    fd.append("MsgFile", e.target.files[0]);

    if (Mytype.includes("image")) {
      Message.MsgType = "image";
    } else if (Mytype.includes("audio")) {
      Message.MsgType = "audio";
    } else if (Mytype.includes("video")) {
      Message.MsgType = "video";
    } else {
      Message.MsgType = "file";
    }

    let destination;
    if (props.Friend && props.Friend.UserName) {
      destination = "individual";
    } else {
      destination = "room";
    }

    setMessage(Message);
    dispatch(
      UploadMsgFileService(fd, {
        Message,
        Reciever: props.Friend || props.Room,
        destination: destination,
        Conversation: props.Conversation,
      })
    );
  };

  return (
    <footer className="MessageSectionFooter">
      <input
        type="file"
        style={{ display: "none" }}
        ref={FileUpload}
        onChange={(e) => {
          SendFile(e);
        }}
      />
      <button
        className="MessageInputsBtn"
        onClick={() => {
          FileUpload.current.click();
        }}
      >
        <i className="fa fa-upload"></i>
      </button>
      <button className="MessageInputsBtn">
        <i className="fa fa-camera"></i>
      </button>
      <input
        ref={MessageInput}
        name="Value"
        className="MessageInput"
        placeholder="Type your message here"
        onChange={handleChange}
        onKeyPress={(e) => {
          if (e.key == "Enter") {
            SendMessage();
            MessageInput.current.value = "";
          }
        }}
      />
      <button
        className="MessageInputsBtn"
        onClick={() => {
          SendMessage();
          MessageInput.current.value = "";
        }}
      >
        <i className="fa fa-send"></i>
      </button>
    </footer>
  );
}

export default MessageSectionFooter;
