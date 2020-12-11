import React, { useEffect, useRef, useState } from "react";
import AccountSideBar from "../StyledComponents/AccountSideBar";
import AccountSideBarBackDrop from "../StyledComponents/AcountSideBarBackdrop";
import StatusSwitch from "../StyledComponents/StatusSwitch";
import "../MessageSection/style.css";
import { useDispatch } from "react-redux";
import { UpdateProfileService } from "../../services/user";
import { ServerURI } from "../../services/config";
import { UploadImgService } from "../../services/fileUpload";
import { LogOutService } from "../../services/auth/auth";
function AccountSideBarComponent(props) {
  const [isOnline, setIsOnline] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [Profile, setProfile] = useState({ ...props.User });

  const dispatch = useDispatch();
  const handleChange = (e) => {
    Profile[e.target.name] = e.target.value;
    setProfile(props.User);
    console.log(Profile);
  };
  const upload = (e) => {
    let Fd = new FormData();
    Fd.append("Picture", e.target.files[0]);
    dispatch(UploadImgService(Fd, props.User._id));
  };
  const UploadRef = useRef();
  useEffect(() => {
    setProfile(props.User);
  }, [props.User]);

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
            src={`${ServerURI}/${props.User.picture}`}
            alt="ProfilePic"
          />
          {/* ************************ */}
          <div className="AccountSideBarStatusAndUploadImg">
            <input
              ref={UploadRef}
              type="file"
              name="ProfilePic"
              style={{ display: "none" }}
              onChange={(e) => {
                upload(e);
              }}
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
                onClick={() => setIsEditing(!isEditing)}
              >
                <i className="fa fa-edit"></i>
              </button>
            ) : null}
            <h2>{props.User.UserName}</h2>
            {isEditing ? (
              <div>
                <input
                  name="UserName"
                  className="EditInput"
                  type="text"
                  defaultValue={props.User.UserName}
                  onChange={(e) => handleChange(e)}
                />
                <input
                  name="Email"
                  className="EditInput"
                  type="email"
                  defaultValue={props.User.Email}
                  onChange={(e) => handleChange(e)}
                />
                <input
                  name="Password"
                  className="EditInput"
                  type="text"
                  placeholder="New password"
                  onChange={(e) => handleChange(e)}
                />
                <div>
                  <button
                    className="AccountSideBarSaveBtn"
                    onClick={() => {
                      console.log(Profile);
                      dispatch(UpdateProfileService(Profile));
                      setIsEditing(false);
                    }}
                  >
                    <i className="fa fa-save"></i>
                  </button>
                  <button
                    className="AccountSideBarDeleteBtn"
                    onClick={() => setIsEditing(false)}
                  >
                    <i className="fa fa-trash"></i>
                  </button>
                </div>
              </div>
            ) : (
              <div></div>
            )}
            <button
              className="AccountSideBarDisconnectBtn"
              onClick={() => {
                props.setAccountSectionOpen(false);
                dispatch(LogOutService(props.User));
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
