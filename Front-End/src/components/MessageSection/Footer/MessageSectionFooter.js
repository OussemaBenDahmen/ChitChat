import React from "react";

function MessageSectionFooter() {
  return (
    <footer className="MessageSectionFooter">
      <button className="MessageInputsBtn">
        <i className="fa fa-upload"></i>
      </button>
      <button className="MessageInputsBtn">
        <i className="fa fa-camera"></i>
      </button>
      <textarea className="MessageInput" placeholder="Type your message here" />
      <button className="MessageInputsBtn">
        <i className="fa fa-send"></i>
      </button>
    </footer>
  );
}

export default MessageSectionFooter;
