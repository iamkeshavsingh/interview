import React from "react";
import SignIn from "../../components/Auth/SignIn";
import SignUp from "../../components/Auth/SignUp";

import "./Auth.css";

function Auth() {
  return (
    <div className="auth">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default Auth;
