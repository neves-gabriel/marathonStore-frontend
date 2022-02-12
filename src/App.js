import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./views/HomePage";

export default function App() {

    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
}