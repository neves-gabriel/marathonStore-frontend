import React from "react";
import styled from "styled-components";
import { AuthContext } from "../providers/auth";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SectionTitle from "../components/PageContent/SectionTitle";
import ProductSection from "../components/PageContent/ProductSection";
import SideBar from "../components/PageContent/SideBar";
import CartScreen from "../components/PageContent/CartScreen";

export default function HomePage() {
  const { sideBarTrigger } = React.useContext(AuthContext);
  const { cartTrigger } = React.useContext(AuthContext);

  return (
    <>
      <Container triggered={sideBarTrigger || cartTrigger}>
        <Header />
        <SectionTitle title={"Destaques"} />
        <ProductSection />
        <SectionTitle title={"Lançamentos"} />
        <ProductSection />
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
`;
