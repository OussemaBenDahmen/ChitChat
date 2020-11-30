import React, { useRef, useState } from "react";
import AccountSideBar from "../../StyledComponents/AccountSideBar";
import AccountSideBarBackDrop from "../../StyledComponents/AcountSideBarBackdrop";
import StatusSwitch from "../../StyledComponents/StatusSwitch";

function AccountSideBarComponent(props) {
  const [isOnline, setIsOnline] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const UploadRef = useRef();
  return (
    <AccountSideBarBackDrop
      isOpen={props.isLogged && props.isAccountSectionOpen}
    >
      <AccountSideBar isOpen={props.isLogged && props.isAccountSectionOpen}>
        <div className="AccountSideBarContent">
          <button
            className="AccountSideBarCloseBtn"
            onClick={() => {
              props.setAccountSectionOpen(false);
              setIsEditing(false);
            }}
          >
            <i className="fa fa-chevron-right"></i>
          </button>
          <img
            className="AccountSideBarProfilePic"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6DwG_7wDljpyRLG-iFOmqPDI-LJtR1-cqTQ&usqp=CAU"
            alt="ProfilePic"
          />
          {/* ************************ */}
          <div className="AccountSideBarStatusAndUploadImg">
            <input
              ref={UploadRef}
              type="file"
              name="ProfilePic"
              style={{ display: "none" }}
            />
            <button
              className="UploadFile"
              onClick={() => {
                UploadRef.current.click();
              }}
            >
              <i className="fa fa-upload"></i>
            </button>
            <div className="AccountSideBarStatus">
              <h5>Status </h5>
              <StatusSwitch
                isOnline={isOnline}
                onClick={() => setIsOnline(!isOnline)}
              >
                <div className="SwitchButton"></div>
              </StatusSwitch>
            </div>
          </div>
          <div className="AccountInformation">
            {props.isAccountSectionOpen ? (
              <button
                className="AccountInformationEditBtn"
                onClick={() => setIsEditing(true)}
              >
                <i className="fa fa-edit"></i>
              </button>
            ) : null}
            <h2>TestUser</h2>
            {isEditing ? (
              <div>
                <input
                  className="EditInput"
                  type="text"
                  defaultValue="TestUser"
                />
                <input
                  className="EditInput"
                  type="email"
                  defaultValue="your.email@example.com"
                />
                <div>
                  <button
                    className="AccountSideBarSaveBtn"
                    onClick={() => setIsEditing(false)}
                  >
                    <i className="fa fa-save"></i>
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <h4>your.email@example.com</h4>
              </div>
            )}
            <button
              className="AccountSideBarDisconnectBtn"
              onClick={() => {
                props.setAccountSectionOpen(false);
                props.setIsLogged(false);
              }}
            >
              Disconnect
            </button>
          </div>
        </div>
      </AccountSideBar>
    </AccountSideBarBackDrop>
  );
}

export default AccountSideBarComponent;
