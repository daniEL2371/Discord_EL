import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Chats from "./components/Chats/Chats";
import SideBar from "./components/SideBar/SideBar";
import Login from "./pages/Login/Login";
import { getUser } from "./features/user/UserSlice";

function App() {
  const user = useSelector(getUser);
  return (
    <div className="App">
      {user ? (
        <>
          <Login />
          <SideBar />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
