import React from "react";
import styled from "styled-components";
import { AuthContext } from "../../providers/auth";

import { IconContext } from "react-icons";
import { FaRegWindowClose } from "react-icons/fa";

export default function SideBar() {

    const { sideBarTrigger, setSideBarTrigger } = React.useContext(AuthContext);


    return (
        <Container onClick={(sideBarTrigger) => setSideBarTrigger(false)}>
            <IconContext.Provider value={{ color: "#FFFFFF", size: "46px" }}>
                <FaRegWindowClose onClick={() => setSideBarTrigger(false)} />
            </IconContext.Provider>
            <Content>
                <SideHeader>Olá, faça seu login!</SideHeader>
                <SideButton><h1>Todas as categorias</h1></SideButton>
                <SideButton>Futebol</SideButton>
                <SideButton>Automobilismo</SideButton>
                <SideButton>Handebol</SideButton>
                <SideButton>Basquete</SideButton>
                <SideButton>Ciclismo</SideButton>
            </Content>
        </Container>
    );
}
// ::::::::::Styled-Components::::::::::
const Container = styled.div`
    width: 100%;
    min-height: 100vh;

    display: flex;
    position: fixed;
    z-index: 3;
`
const Content = styled.div`
    width: 300px;
    min-height: 100vh;
    background-color: #1e1e1e;

    position: fixed;
    right: 0;

    &:first-child{
        color: red;
    }
`
const SideHeader = styled.div`
    width: 100%;
    height: 70px;
    padding: 20px;
    background-color: #1b1b1b;
    
    display: flex;
    justify-content: flex-start;
    align-items: center;
    
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    color: #FFF;
`
const SideButton = styled.div`
    width: 100%;
    height: 70px;
    background: #262626;
    border: 1px solid #262626;
    border-radius: 5px;
    border-bottom: 1px solid black;
    border-top: 1px solid rgba(255,255,255,.1);
    border-left: 5px solid transparent;
    padding: 25px;

    display: flex;
    justify-content: flex-end;
    align-items: center;
 
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    color: #FFF;
    
    &:first-child{
        color: red;
    }
    
    h1{
        font-size: 25px;
    }
`