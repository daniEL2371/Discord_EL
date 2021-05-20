import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";

function Login(props) {
  const SignIn = () => {};
  return (
    <div className="login">
      <div className="login_logo">
        <img src="../Discord.svg" alt="" />
      </div>
      <Button onClick={SignIn}>Sign In</Button>
    </div>
  );
}

export default Login;
