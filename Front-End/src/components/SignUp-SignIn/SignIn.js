import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { LogInService } from "../../services/auth/auth";
import "./style.css";
function SignIn() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [Profile, setProfile] = useState({
    UserName: "",
    Password: "",
  });
  const HandleChange = (e) => {
    Profile[e.target.name] = e.target.value;
    setProfile(Profile);
  };
  return (
    <div className="AuthForm">
      <h2>Log In</h2>
      <p className="FormParagraph">
        you don't have an account ? click{" "}
        <a className="FormLink" href="/">
          here
        </a>
      </p>
      <input
        name="UserName"
        className="FormInput"
        type="text"
        placeholder="UserName"
        required
        onChange={HandleChange}
      />
      <input
        name="Password"
        className="FormInput"
        type="password"
        required
        minLength="8"
        placeholder="Password"
        onChange={HandleChange}
      />
      <div className="FromBtns">
        <button
          className="FromBtn Submit"
          onClick={(e) => {
            e.preventDefault();
            dispatch(LogInService(Profile, history));
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}

export default SignIn;
