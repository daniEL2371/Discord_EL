import React, { useEffect, useState } from "react";
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
import { useSelector } from "react-redux";
import { getUser } from "../../features/user/UserSlice";
import db, { auth } from "../../app/config/firebase";
import { COLLECTION_NAMES } from "../../app/constants/Names";
function SideBar(props) {
  const user = useSelector(getUser);
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    db.collection(COLLECTION_NAMES.CHANNELS).onSnapshot((snapShot) => {
      const _channels = snapShot.docs.map((doc) => ({
        id: doc.id,
        channel: doc.data(),
      }));
      setChannels(_channels);
    });
  }, []);

  const onChannelAdd = () => {
    const channel_name = prompt("Enter channel name");
    if (channel_name) {
      db.collection(COLLECTION_NAMES.CHANNELS).add({
        channelName: channel_name,
      });
    }
  };
  console.log("channels", channels);
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
          <span onClick={onChannelAdd}>
            <Add className="sidbar_addChannel" />{" "}
          </span>
        </div>
        <div className="sidebar_channles">
          {channels.map(({ id, channel }) => (
            <SideBarChannel
              id={id}
              channelName={channel.channelName}
              key={id}
            />
          ))}
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
      <div className="sidebar_profile" onClick={() => auth.signOut()}>
        <Avatar src={user.photo} />
        <div className="sidebar_profile_info">
          <h3>{user.name}</h3>
          <p>#{user.uid.slice(1, 5)}</p>
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
