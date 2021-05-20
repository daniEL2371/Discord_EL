import { Avatar } from "@material-ui/core";
import React from "react";
import "./Messages.css";
function Messages(props) {
  return (
    <div className="message">
      <Avatar />
      <div className="message_info">
        <h4>
          Daniel Zelalem
          <span className="message_timestamp"> this is a time stamp</span>
        </h4>
        <p>this is a message</p>
      </div>
    </div>
  );
}

export default Messages;
