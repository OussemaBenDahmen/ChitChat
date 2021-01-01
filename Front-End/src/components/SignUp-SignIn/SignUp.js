import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { SignUpService } from "../../services/auth/auth";
import "./style.css";

function SignUp() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [Profile, setProfile] = useState({
    UserName: "",
    Email: "",
    Password: "",
  });
  const HandleChange = (e) => {
    Profile[e.target.name] = e.target.value;
    setProfile(Profile);
  };
  return (
    <div className="AuthForm">
      <h2 className="FormTitle">Create an account</h2>
      <p className="FormParagraph">
        already have an account ? click{" "}
        <a className="FormLink" href="/SignIn">
          here
        </a>
      </p>
      <input
        className="FormInput"
        type="text"
        placeholder="UserName"
        name="UserName"
        required
        onChange={HandleChange}
      />
      <input
        name="Email"
        className="FormInput"
        type="email"
        placeholder="your.email@example.com"
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
            dispatch(SignUpService(Profile, history));
          }}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default SignUp;
