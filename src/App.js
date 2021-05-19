import React from "react";
import "./App.css";
import Chats from "./components/Chats/Chats";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <div className="App">
      <SideBar />
      {/* SiderBar */}
      <Chats />
    </div>
  );
}

export default App;
