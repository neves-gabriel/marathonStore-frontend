import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/auth";
import { useContext } from "react";
import { IconContext } from "react-icons";
import { FaSignOutAlt } from "react-icons/fa";
import OutsideClickHandler from "react-outside-click-handler";
import LogIn from "./LogIn.js";
import SignUp from "./SignUp.js";

export default function SideBar() {
  const { userData } = useContext(AuthContext);
  const { showLogIn } = useContext(AuthContext);
  const { showSignUp } = useContext(AuthContext);
  const { setSideBarTrigger } = useContext(AuthContext);
  const { setURL } = useContext(AuthContext);

  const navigate = useNavigate();

  function logOut() {
    localStorage.clear();
    navigate(0);
  }

  return (
    <Container>
      <OutsideClickHandler onOutsideClick={() => setSideBarTrigger(false)}>
        {userData ? (
          <IconContext.Provider value={{ color: "#FFFFFF", size: "46px" }}>
            <IconBox>
              <FaSignOutAlt onClick={() => logOut()} />
            </IconBox>
          </IconContext.Provider>
        ) : null}
        <Content>
          <SideHeader>
            Olá, {userData ? userData.name : "faça seu login!"}
          </SideHeader>
          {showLogIn ? <LogIn /> : null}
          {showSignUp ? <SignUp /> : null}
          <SideButton
            onClick={() => {
              setSideBarTrigger(false);
            }}
          >
            <h1>Todas as categorias</h1>
          </SideButton>
          <SideButton
            onClick={() => {
              navigate(`/categorias/futebol`);
              setSideBarTrigger(false);
              setURL("https://marathonstore-backend.herokuapp.com/products/Futebol");
            }}
          >
            Futebol
          </SideButton>
          <SideButton
            onClick={() => {
              navigate(`/categorias/automobilismo`);
              setSideBarTrigger(false);
              setURL("https://marathonstore-backend.herokuapp.com/products/Automobilismo");
            }}
          >
            Automobilismo
          </SideButton>
          <SideButton
            onClick={() => {
              navigate(`/categorias/handebol`);
              setSideBarTrigger(false);
              setURL("https://marathonstore-backend.herokuapp.com/products/Handebol");
            }}
          >
            Handebol
          </SideButton>
          <SideButton
            onClick={() => {
              navigate(`/categorias/basquete`);
              setSideBarTrigger(false);
              setURL("https://marathonstore-backend.herokuapp.com/products/Basquete");
            }}
          >
            Basquete
          </SideButton>
          <SideButton
            onClick={() => {
              navigate(`/categorias/ciclismo`);
              setSideBarTrigger(false);
              setURL("https://marathonstore-backend.herokuapp.com/products/Ciclismo");
            }}
          >
            Ciclismo
          </SideButton>
        </Content>
      </OutsideClickHandler>
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
`;
const Content = styled.div`
  width: 300px;
  min-height: 100vh;
  background-color: #1e1e1e;

  position: fixed;
  right: 0;

  &:first-child {
    color: red;
  }
`;
const SideHeader = styled.div`
  width: 100%;
  height: 70px;
  padding: 20px;
  background-color: #1b1b1b;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  color: #fff;
`;
const SideButton = styled.div`
  width: 100%;
  height: 70px;
  background: #262626;
  border-radius: 5px;
  border: 1px solid #262626;
  border-bottom: 1px solid black;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-left: 5px solid transparent;
  padding: 25px;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  color: #fff;

  &:first-child {
    color: red;
  }

  h1 {
    font-size: 25px;
  }
  cursor: pointer;
`;
const IconBox = styled.div`
  position: absolute;
  cursor: pointer;
  right: 10px;
  z-index: 2;
  top: 12px;
`;
