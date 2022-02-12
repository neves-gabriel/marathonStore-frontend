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
    width: 90%;
    margin-top: 40px;
    margin-bottom: 10px;

    h1{
        font-size: 26px;
        color: #333333;
    }
`