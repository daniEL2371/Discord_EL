import React from "react";
import { useDispatch } from "react-redux";
import "./SideBarChannel.css";
import { setChannelInfo } from "../../features/app/appSlice";

const SideBarChannel = ({ id = "", channelName = "" }) => {
  const dispatch = useDispatch();
  const onChannelClick = () => {
    dispatch(
      setChannelInfo({
        channelName: channelName,
        id: id,
      })
    );
  };
  return (
    <div className="sidbar_channel_item" onClick={onChannelClick}>
      <h4 className="sidbar_channel_item_header">
        <span className="sidebar_channle_hash">#</span>
        {channelName}
      </h4>
    </div>
  );
};

export default SideBarChannel;
