import React from "react";
import styled from "styled-components";

export default function SectionTitle( {title} ) {

    return (
        <Container>
            <h1>{title}</h1>
        </Container>
    );
}
// ::::::::::Styled-Components::::::::::
const Container = styled.div`
    width: 100%;
    margin-top: 40px;
    margin-bottom: 10px;

    h1{
        font-family: 'Righteous', cursive;
        font-size: 26px;
        color: #333333;
        margin-left: 10px;
    }
`