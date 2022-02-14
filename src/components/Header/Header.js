import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/auth";

import { IconContext } from "react-icons";
import { GoThreeBars } from "react-icons/go";

import HeaderIcon from "./HeaderIcon";

export default function Header() {
    const { setSideBarTrigger } = React.useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <Container>
            <LogoName onClick={() => navigate("/")}>
                <HeaderIcon />
                <h1>Marathôn</h1>
            </LogoName>
            <IconContext.Provider value={{ color: "#fff", size: "36px" }}>
                <GoThreeBars
                    style={{ cursor: "pointer" }}
                    onClick={() => setSideBarTrigger(true)}
                />
            </IconContext.Provider>
        </Container>
    );
}
// ::::::::::Styled-Components::::::::::
const Container = styled.div`
    width: 100%;
    height: 75px;
    background-color: #262626;
    padding: 20px;
    margin-bottom: 10px;
    border: 1px solid #262626;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-left: 5px solid transparent;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        font-family: "Montserrat", sans-serif;
        font-size: 22px;
        text-decoration: overline;
        font-weight: 400;
        color: #e5e5e5;
        margin-left: 10px;
    }
`;
const LogoName = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
