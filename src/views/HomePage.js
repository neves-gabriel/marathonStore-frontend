import React from "react";
import styled from "styled-components";
import { AuthContext } from "../providers/auth";

import Header from "../components/Header/Header";
import SectionTitle from "../components/PageContent/SectionTitle";
import ProductSection from "../components/PageContent/ProductSection";
import SideBar from "../components/PageContent/SideBar";
import CartIcon from "../components/PageContent/CartIcon";

export default function HomePage() {

    const { sideBarTrigger, setSideBarTrigger } = React.useContext(AuthContext);

    console.log(sideBarTrigger);

    return (
        <>
            <Container triggered={sideBarTrigger}>
                <Header />
                <SectionTitle title={"Destaques"} />
                <ProductSection />
                <SectionTitle title={"Lançamentos"} />
                <ProductSection />
                <Footer>
                    <CartIcon />
                </Footer>
            </Container>
            {sideBarTrigger === true && <SideBar />}
        </>
    );
}
// ::::::::::Styled-Components::::::::::
const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #FFF;
    filter: brightness(${props => props.triggered ? "0.2" : "1"});

    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    z-index: 2;
`
const Footer = styled.div`
    width: 100%;
    padding: 20px;
    position: fixed;
    bottom: 0;


    display: flex;
    justify-content: flex-end;
`