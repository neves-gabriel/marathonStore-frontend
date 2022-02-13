import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./views/HomePage";
import ProductsPage from "./views/ProductsPage";

export default function App() {

    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/categorias/:selecionada" element={<ProductsPage />} />
            </Routes>
        </BrowserRouter>
    );
}