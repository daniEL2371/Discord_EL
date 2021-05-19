import React from "react";
import "./Chats.css";
import {
  Notifications,
  LocationOn,
  Group,
  Search,
  Send,
  Help,
} from "@material-ui/icons";

function Chats(props) {
  return (
    <div className="chats">
      <div className="chat_header">
        <div className="chat_header_left">
          <h3 className="chat_header_title">
            <span className="chat_header_title_hash"> #</span>
            <span className="chat_header_title_content">Chat Channel Name</span>
          </h3>
        </div>
        <div className="chat_header_right">
          <div className="chat_header_right_icons">
            <Notifications fontSize="small" />
            <LocationOn fontSize="small" />
            <Group fontSize="small" />
          </div>
          <div className="chat_header_search">
            <input className="serach_input" />
            <Search fontSize="small" />
          </div>
          <div className="chat_header_left_icons">
            <Send fontSize="small" />
            <Help fontSize="small" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chats;
