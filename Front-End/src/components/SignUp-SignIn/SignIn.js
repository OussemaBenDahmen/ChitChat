import React from "react";
import "./style.css";
function SignIn() {
  return (
    <form className="AuthForm">
      <input
        className="FormInput"
        type="text"
        placeholder="UserName"
        required
      />
      <input
        className="FormInput"
        type="password"
        required
        minLength="8"
        placeholder="Password"
      />
      <div className="FromBtns">
        <button className="FromBtn Submit">Sign In</button>
        <button className="FromBtn Cancel">Cancel</button>
      </div>
      <p className="FormParagraph">
        you don't have an account ? click{" "}
        <a className="FormLink" href="/">
          here
        </a>
      </p>
    </form>
  );
}

export default SignIn;
