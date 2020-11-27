import React from "react";
import "./style.css";

function SignUp() {
  return (
    <form className="AuthForm">
      <input className="FormInput" type="text" placeholder="UserName" />
      <input
        className="FormInput"
        type="email"
        placeholder="your.email@example.com"
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
        <button className="FromBtn Submit">Sign Up</button>
        <button className="FromBtn Cancel">Cancel</button>
      </div>
      <p className="FormParagraph">
        already have an account ? click{" "}
        <a className="FormLink" href="/SignIn">
          here
        </a>
      </p>
    </form>
  );
}

export default SignUp;
