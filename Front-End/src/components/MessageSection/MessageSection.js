import React, { useState } from "react";
import Scrollbars from "react-custom-scrollbars";
import { Link } from "react-router-dom";
import AccountSideBar from "../StyledComponents/AccountSideBar";
import AccountSideBarBackDrop from "../StyledComponents/AcountSideBarBackdrop";
import DropDown from "../StyledComponents/DropdownDiv";
import MessageElement from "../StyledComponents/MessageElement";
import MessageSpace from "../StyledComponents/MessageSpace";
import StatusSwitch from "../StyledComponents/StatusSwitch";
import "./style.css";

function MessageSection(props) {
  const [isAccountSectionOpen, setAccountSectionOpen] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  return (
    <MessageSpace isLogged={props.isLogged}>
      <header className="MessageSectionHeader">
        <h2 className="RoomName-FriendName">#Room 1</h2>
        <div className="DropDown">
          <button
            className="MessageSectionHeaderDropDownBtn"
            onClick={() => setIsDropDownOpen(!isDropDownOpen)}
          >
            <i className="fa fa-ellipsis-v"></i>
          </button>
          <DropDown isOpen={isDropDownOpen}>
            <button
              className="MessageSectionDropDownContent"
              onClick={() => {
                setAccountSectionOpen(true);
                setIsDropDownOpen(false);
              }}
            >
              Toggle profile
            </button>
            <Link className="MessageSectionDropDownContent">Leave Room</Link>
          </DropDown>
        </div>
      </header>
      <Scrollbars autoHide>
        <main className="MessageSectionMain">
          {[1, 2, 3, 4, 5, 6].map((el, i) => (
            <MessageElement key={i}>
              <img
                className="MessageElementImage"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6DwG_7wDljpyRLG-iFOmqPDI-LJtR1-cqTQ&usqp=CAU"
                alt="UserImage"
              />
              <div className="MessageElementContent">
                <div className="MessageSenderNameAndDate">
                  <h4 className="MessageSenderName">Oussema Ben Dahmen</h4>
                  <h5 className="MessageDate">13:45 AM</h5>
                </div>
                <div className="MessageTxt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  recusandae atque ipsum quo sit ipsa enim animi, commodi totam
                  debitis necessitatibus quos eos porro suscipit placeat ex
                  nobis libero qui?
                </div>
              </div>
            </MessageElement>
          ))}
        </main>
      </Scrollbars>
      <footer className="MessageSectionFooter">
        <button className="MessageInputsBtn">
          <i className="fa fa-upload"></i>
        </button>
        <button className="MessageInputsBtn">
          <i className="fa fa-camera"></i>
        </button>
        <textarea
          className="MessageInput"
          placeholder="Type your message here"
        />
        <button className="MessageInputsBtn">
          <i className="fa fa-send"></i>
        </button>
      </footer>
      <AccountSideBarBackDrop isOpen={props.isLogged && isAccountSectionOpen}>
        <AccountSideBar isOpen={props.isLogged && isAccountSectionOpen}>
          <div className="AccountSideBarContent">
            <button
              className="AccountSideBarCloseBtn"
              onClick={() => setAccountSectionOpen(false)}
            >
              <i className="fa fa-chevron-right"></i>
            </button>
            <img
              className="AccountSideBarProfilePic"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6DwG_7wDljpyRLG-iFOmqPDI-LJtR1-cqTQ&usqp=CAU"
              alt="ProfilePic"
            />
            <div className="AccountSideBarStatusAndUploadImg">
              <input
                type="file"
                name="ProfilePic"
                className="UploadFile fa fa-edit"
              />
              <div className="AccountSideBarStatus">
                <h5>Status</h5>
                <StatusSwitch
                  isOnline={isOnline}
                  onClick={() => setIsOnline(!isOnline)}
                >
                  <div className="SwitchButton"></div>
                </StatusSwitch>
              </div>
            </div>
            <h2>TestUser</h2>
          </div>
        </AccountSideBar>
      </AccountSideBarBackDrop>
    </MessageSpace>
  );
}

export default MessageSection;
