import React from "react";
import "./SideBar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  Add,
  SignalCellularAlt,
  InfoOutlined,
  Call,
  Headset,
  Settings,
  Mic,
} from "@material-ui/icons";
import SideBarChannel from "../SideBarChannel/SideBarChannel";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { Avatar } from "@material-ui/core";
function SideBar(props) {
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <h3>this is cleaver </h3>
        <ExpandMoreIcon />
      </div>
      <div className={"sidebar_channels"}>
        <div className="sidebar_channelsHeader">
          <div className="siderbar_header">
            <ExpandMoreIcon />
            <h4>Text Channles</h4>
          </div>
          <Add className="sidbar_addChannel" />
        </div>
        <div className="sidebar_channles">
          <SideBarChannel />
          <SideBarChannel />
          <SideBarChannel />
        </div>
      </div>
      <div className="sidebar_voice">
        <SignalCellularAlt fontSize="large" className="sidebar_voiceIcon" />
        <div className="sidebar_voiceInfo">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>
        <div className="sidebar_voiceIcons">
          <Call />
          <InfoOutlined />
        </div>
      </div>
      <div className="sidebar_profile">
        <Avatar />
        <div className="sidebar_profile_info">
          <h3>Daniel Zelalem</h3>
          <p>#thisId</p>
        </div>
        <div className="sidebar_profile_icons">
          <Mic />
          <Headset />
          <Settings />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
