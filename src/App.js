import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Chats from "./components/Chats/Chats";
import SideBar from "./components/SideBar/SideBar";
import Login from "./pages/Login/Login";
import { getUser } from "./features/user/UserSlice";
import { auth } from "./app/config/firebase";
import { login, logout } from "./features/user/UserSlice";
function App() {
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user", authUser);
      if (authUser) {
        dispatch(
          login({
            email: authUser.email,
            name: authUser.displayName,
            photo: authUser.photoURL,
            uid: authUser.uid,
          })
        );
      } else {
        dispatch(logout({}));
      }
    });
  }, []);
  return (
    <div className="App">
      {user ? (
        <>
          <SideBar />
          <Chats />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
