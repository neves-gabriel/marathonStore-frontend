import React from "react";
import styled from "styled-components";

import Header from "../components/Header/Header";
import SectionTitle from "../components/PageContent/SectionTitle";
import ProductSection from "../components/PageContent/ProductSection";
import CartIcon from "../components/PageContent/CartIcon";

export default function HomePage() {

    return (
        <Container>
            <Header />
            <SectionTitle title={"Destaques"}/>
            <ProductSection />
            <SectionTitle title={"Lançamentos"}/>
            <ProductSection />
            <CartIcon />
        </Container>
    );
}
// ::::::::::Styled-Components::::::::::
const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #E5E5E5;

    display: flex;
    flex-direction: column;
    align-items: center;
`
const Footer = styled.div`
    
`