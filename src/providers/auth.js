import React from "react";
import { useState, useEffect } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [sideBarTrigger, setSideBarTrigger] = useState(null);
  const [cartTrigger, setCartTrigger] = useState(null);
  const [userData, setUserData] = useState(null);
  const [showLogIn, setShowLogIn] = useState(true);
  const [showSignUp, setShowSignUp] = useState(false);
  const [URL, setURL] = useState("");
  const [cartInfo, setCartInfo] = useState([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (
      localStorage.getItem("token") !== "" &&
      localStorage.getItem("token") !== null
    ) {
      setUserData({
        name: localStorage.getItem("name"),
        email: localStorage.getItem("email"),
        token: localStorage.getItem("token"),
      });
      setShowLogIn(false);
      setShowSignUp(false);
      return;
    } else {
      setShowLogIn(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        sideBarTrigger,
        setSideBarTrigger,
        cartTrigger,
        setCartTrigger,
        userData,
        setUserData,
        showLogIn,
        setShowLogIn,
        showSignUp,
        setShowSignUp,
        URL,
        setURL,
        cartInfo,
        setCartInfo,
        count,
        setCount,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
