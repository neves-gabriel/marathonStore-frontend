import React from "react";
import styled from "styled-components";

export default function ProductSection() {

    return (
        <Container>
            <ProductBox>
                <img src="https://sparco.vteximg.com.br/arquivos/ids/158128-1250-1250/015R345MSN_01.jpg?v=637165337373370000" />
                <h1>Direção Sparco</h1>
            </ProductBox>
            <ProductBox>
                <img src="https://sparco.vteximg.com.br/arquivos/ids/158128-1250-1250/015R345MSN_01.jpg?v=637165337373370000" />
                <h1>Direção Sparco</h1>
            </ProductBox>
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
    display: flex;
    justify-content: center;
    overflow-x: scroll;

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
    margin-top: 5px;
    margin-bottom: 15px;
    margin-right: 10px;
    box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.7);
    padding: 18px 14px 18px 14px;

    display: flex;


    img{
        width: 120px;
        height: 120px;
    }
`