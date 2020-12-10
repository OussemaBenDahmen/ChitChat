import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SignUpService } from "../../services/auth/auth";
import "./style.css";

function SignUp() {
  const dispatch = useDispatch();
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
            dispatch(SignUpService(Profile));
          }}
        >
          Sign Up
        </button>
        <button className="FromBtn Cancel">Cancel</button>
      </div>
      <p className="FormParagraph">
        already have an account ? click{" "}
        <a className="FormLink" href="/SignIn">
          here
        </a>
      </p>
    </div>
  );
}

export default SignUp;
