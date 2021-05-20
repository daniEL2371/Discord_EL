import { Avatar } from "@material-ui/core";
import React from "react";
import "./Messages.css";
import moment from "moment";
function Messages({ _message, timestamp, userName, userPhoto }) {
  return (
    <div className="message">
      <Avatar src={userPhoto} />
      <div className="message_info">
        <h4>
          {userName}
          <span className="message_timestamp">
            {" "}
            {moment(new Date(timestamp?.toDate()).toUTCString()).fromNow()}
          </span>
        </h4>
        <p>{_message}</p>
      </div>
    </div>
  );
}

export default Messages;
