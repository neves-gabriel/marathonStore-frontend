import React from "react";
import styled from "styled-components";

import Header from "../components/Header/Header";


export default function ProductsPage() {

    return(
        <Container>
            <Header />
        </Container>
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