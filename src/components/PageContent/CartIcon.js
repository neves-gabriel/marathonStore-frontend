import React from "react";
import styled from "styled-components";

import { IconContext } from "react-icons";
import { BsCart3 } from "react-icons/bs";

export default function CartIcon() {

    return (
        <Container>
            <IconContext.Provider value={{ color: "white", size: "36px" }}>
                <BsCart3 />
            </IconContext.Provider>
        </Container>
    );
}
// ::::::::::Styled-Components::::::::::
const Container = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 56px;
    background-color: #CBCBCB;

    display: flex;
    justify-content: center;
    align-items: center;
`