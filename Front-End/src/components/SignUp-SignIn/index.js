import React from "react";
import { Route, Switch } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function SignUpAndSignIn() {
  return (
    <Switch>
      <Route exact path="/">
        <SignUp />
      </Route>
      <Route exact path="/SignIn">
        <SignIn />
      </Route>
    </Switch>
  );
}

export default SignUpAndSignIn;
