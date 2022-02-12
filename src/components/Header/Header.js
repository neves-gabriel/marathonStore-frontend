import React from "react";
import styled from "styled-components";

import { IconContext } from "react-icons";
import { GoThreeBars } from "react-icons/go";

import HeaderIcon from "./HeaderIcon";

export default function Header() {

    return (
        <Container>
            <LogoName>
                <HeaderIcon />
                <h1>Marathôn</h1>
            </LogoName>
            <IconContext.Provider value={{ color: "white", size: "36px" }}>
                <GoThreeBars />
            </IconContext.Provider>
        </Container>
    );
}
// ::::::::::Styled-Components::::::::::
const Container = styled.div`
    width: 100%;
    height: 75px;
    background-color: #5381f1;
    padding: 20px;
    margin-bottom: 10px;
    font-family: 'Cinzel', serif;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1{
        font-size: 20px;
        font-weight: 700;
        color: #E5E5E5;
        margin-left: 10px;
    }
`
const LogoName = styled.div`
    display: flex;
    align-items: center;
`