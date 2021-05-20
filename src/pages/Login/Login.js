import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "../../app/config/firebase";
import "./Login.css";

function Login(props) {
  const SignIn = () => {
    auth.signInWithPopup(provider).catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <div className="login_container">
        <div className="login_logo">
          <img src="../Discord.svg" alt="" />
        </div>
        <Button onClick={SignIn}>Sign In</Button>
      </div>
    </div>
  );
}

export default Login;
