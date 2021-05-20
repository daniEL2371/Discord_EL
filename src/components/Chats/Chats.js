import React, { useEffect, useState } from "react";
import "./Chats.css";
import {
  Notifications,
  LocationOn,
  Group,
  Search,
  Send,
  Help,
  AddCircle,
  CardGiftcard,
  EmojiEmotions,
  Gif,
} from "@material-ui/icons";
import Messages from "../Messages/Messages";
import { useSelector } from "react-redux";
import { getChannelID, getChannelName } from "../../features/app/appSlice";
import db from "../../app/config/firebase";
import { COLLECTION_NAMES } from "../../app/constants/Names";
import { getUser } from "../../features/user/UserSlice";
import firebase from "firebase";

function Chats(props) {
  const channelName = useSelector(getChannelName);
  const channelId = useSelector(getChannelID);
  const [messages, setMessages] = useState([]);

  const [inputValue, setInput] = useState("");
  const user = useSelector(getUser);
  console.log("messages", messages);

  useEffect(() => {
    if (channelId) {
      db.collection(COLLECTION_NAMES.CHANNELS)
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((sp) => setMessages(sp.docs.map((doc) => doc.data())));
    }
  }, [channelId]);

  const onSendMessage = (e) => {
    e.preventDefault();
    if (inputValue) {
      db.collection(COLLECTION_NAMES.CHANNELS)
        .doc(channelId)
        .collection("messages")
        .add({
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          message: inputValue,
          user: user,
        });
      setInput("");
    }
  };
  return (
    <div className="chats">
      <div className="chat_header">
        <div className="chat_header_left">
          <h3 className="chat_header_title">
            <span className="chat_header_title_hash"> #</span>
            <span className="chat_header_title_content">{channelName}</span>
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
      <div className="chat_messages">
        {messages.map(({ message, timestamp, user }) => (
          <Messages
            key={timestamp}
            _message={message}
            timestamp={timestamp}
            userName={user.name}
            userPhoto={user.photo}
          />
        ))}
      </div>
      <div className="chat_input">
        <AddCircle fontSize="large" />
        <form>
          <input
            disabled={!channelId}
            value={inputValue}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Message #TESTCHANNEL"
          />
          <button onClick={onSendMessage} type="submit" className="chat_submit">
            Send
          </button>
        </form>
        <div className="chat_inputIcons">
          <CardGiftcard fontSize="large" />
          <Gif fontSize="large" />
          <EmojiEmotions fontSize="large" />
        </div>
      </div>
    </div>
  );
}

export default Chats;
