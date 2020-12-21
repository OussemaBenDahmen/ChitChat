import React, { useEffect, useRef, useState } from "react";
import AccountSideBar from "../StyledComponents/AccountSideBar";
import AccountSideBarBackDrop from "../StyledComponents/AcountSideBarBackdrop";
import StatusSwitch from "../StyledComponents/StatusSwitch";
import { useDispatch } from "react-redux";
import {
  DeleteProfileService,
  UpdateProfileService,
  UpdateStatusService,
} from "../../services/user";
import { ServerURI } from "../../services/config";
import { UploadImgService } from "../../services/fileUpload";
import { LogOutService } from "../../services/auth/auth";
import { Link } from "react-router-dom";

import "./style.css";

function AccountSideBarComponent(props) {
  const myStatus =
    props.User.Status && props.User.Status == "Online" ? true : false;

  const [isOnline, setIsOnline] = useState(myStatus);
  const [isEditing, setIsEditing] = useState(false);
  const [Profile, setProfile] = useState({ ...props.User });

  const dispatch = useDispatch();
  const handleChange = (e) => {
    Profile[e.target.name] = e.target.value;
    setProfile(props.User);
  };
  const upload = (e) => {
    let Fd = new FormData();
    Fd.append("Picture", e.target.files[0]);
    dispatch(UploadImgService(Fd, props.User._id));
  };
  const UploadRef = useRef();
  useEffect(() => {
    setProfile(props.User);
    setIsOnline(myStatus);
  }, [props.User]);

  return (
    <AccountSideBarBackDrop
      isOpen={props.isLogged && props.isAccountSectionOpen}
      onClick={(e) => {
        if (e.clientX < window.visualViewport.width - 300) {
          props.setAccountSectionOpen(false);
        }
      }}
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
                onClick={() => {
                  dispatch(
                    UpdateStatusService(props.User._id, {
                      Status: isOnline === true ? "Offline" : "Online",
                    })
                  );
                  setIsOnline(!isOnline);
                }}
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
                      dispatch(UpdateProfileService(Profile));
                      setIsEditing(false);
                    }}
                  >
                    <i className="fa fa-save"></i>
                  </button>
                  <button
                    className="AccountSideBarDeleteBtn"
                    onClick={() => {
                      dispatch(DeleteProfileService(props.User._id));
                      setIsEditing(false);
                    }}
                  >
                    <i className="fa fa-trash"></i>
                  </button>
                </div>
              </div>
            ) : (
              <div></div>
            )}
            <Link
              to="/SignIn"
              className="AccountSideBarDisconnectBtn"
              onClick={() => {
                props.setAccountSectionOpen(false);
                dispatch(LogOutService(props.User));
              }}
            >
              Disconnect
            </Link>
          </div>
        </div>
      </AccountSideBar>
    </AccountSideBarBackDrop>
  );
}

export default AccountSideBarComponent;
