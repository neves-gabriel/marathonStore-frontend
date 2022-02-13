import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/auth";

import { IconContext } from "react-icons";
import { GoThreeBars } from "react-icons/go";

import HeaderIcon from "./HeaderIcon";

export default function Header() {

    const { sideBarTrigger, setSideBarTrigger } = React.useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <Container>
            <LogoName onClick={() => navigate("/")}>
                <HeaderIcon />
                <h1>Marathôn</h1>
            </LogoName>
            <IconContext.Provider value={{ color: "#fff", size: "36px" }}>
                <GoThreeBars onClick={() => setSideBarTrigger(true)}/>
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
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1{
        font-family: 'Montserrat', sans-serif;
        font-size: 22px;
        text-decoration: overline;
        font-weight: 400;
        color: #E5E5E5;
        margin-left: 10px;
    }
`
const LogoName = styled.div`
    display: flex;
    align-items: center;
`