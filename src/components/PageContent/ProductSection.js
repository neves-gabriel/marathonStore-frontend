import React from "react";
import styled from "styled-components";

export default function ProductSection() {

    return (
        <Container>
            <ProductBox>
                <img src="https://sparco.vteximg.com.br/arquivos/ids/158128-1250-1250/015R345MSN_01.jpg?v=637165337373370000" />
                <h1>Direção Sparco</h1>
            </ProductBox>
        </Container>
    );
}
// ::::::::::Styled-Components::::::::::
const Container = styled.div`
    width: 90%;
    background-color: #FFF;
   
    h1{
        font-size: 26px;
        font-weight: 700;
        color: #E5E5E5;
        margin-left: 10px;
    }
`
const ProductBox = styled.div`
    width: 172px;
    height: 216px;
    border-radius: 9px;
    box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.7);
    padding: 18px 14px 18px 14px;

    display: flex;
    justify-content: center;
    flex-direction: column;

    img{
        width: 120px;
        height: 120px;
    }
`