import React from "react";
import { useState, useEffect } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {

    const [sideBarTrigger, setSideBarTrigger] = useState(null);

    return (
        <AuthContext.Provider value={{ sideBarTrigger, setSideBarTrigger }}>
            {children}
        </ AuthContext.Provider>
    )
}