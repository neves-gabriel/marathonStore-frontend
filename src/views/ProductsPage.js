import React from "react";
import styled from "styled-components";
import { AuthContext } from "../providers/auth";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SideBar from "../components/PageContent/SideBar";
import CartScreen from "../components/PageContent/CartScreen";

export default function ProductsPage() {
  const { sideBarTrigger } = React.useContext(AuthContext);
  const { cartTrigger } = React.useContext(AuthContext);

  return (
    <>
      <Container triggered={sideBarTrigger || cartTrigger}>
        <Header />
        <Footer />
      </Container>
      {sideBarTrigger === true && <SideBar />}
      {cartTrigger === true && <CartScreen />}
    </>
  );
}

// ::::::::::Styled-Components::::::::::
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  filter: brightness(${(props) => (props.triggered ? "0.2" : "1")});

  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  z-index: 2;
`;
