import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AuthContext } from "../providers/auth";
import { useContext } from "react";
import { useSearchParams } from "react-router-dom";

import { IconContext } from "react-icons";
import { AiOutlinePlusCircle } from "react-icons/ai";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SideBar from "../components/PageContent/SideBar";
import SectionTitle from "../components/PageContent/SectionTitle";
import CartScreen from "../components/PageContent/CartScreen";

export default function Checkout() {

    const { sideBarTrigger } = React.useContext(AuthContext);
    const { cartTrigger } = React.useContext(AuthContext);
    const { cartInfo, setCartInfo } = React.useContext(AuthContext);
    const { URL } = useContext(AuthContext);
    const [content, setContent] = useState([]);

    const initialValue = {
        cardName: "",
        cardNumber: "",
        securityNumber: "",
        expirationDate: "",
    }
    const [input, setInput] = useState(initialValue);

    function onChange(ev) {
        const { name, value } = ev.target

        setInput({ ...input, [name]: value });
    }
console.log(input);
    return (
        <>
            <Container triggered={sideBarTrigger || cartTrigger}>
                <Header />
                <SectionTitle title={"Finalizar compra"} />
                <OrderSection>
                    <ProductScroll>
                        {cartInfo !== [] &&
                            cartInfo.map((items) => (
                                <>
                                    <ProductBox>
                                        <ImgBox>
                                            <img src={items.imgURL} />
                                        </ImgBox>
                                        <ProductInfo>
                                            <h1>{items.name}</h1>
                                            <h2>R${items.price}</h2>
                                        </ProductInfo>
                                    </ProductBox>
                                </>
                            ))}
                    </ProductScroll>
                </OrderSection>
                <CardInfo>
                    <Input placeholder="Nome impresso no cartão" type="text" name="cardName" onChange={onChange} />
                    <Input placeholder="Digitos do cartão" type="text" name="cardNumber" onChange={onChange} />
                    <CardSecurity>
                        <Input placeholder="Código de segurança" type="text" name="securityNumber" onChange={onChange} />
                        <Input placeholder="Validade" type="text" name="expirationDate" onChange={onChange} />
                    </CardSecurity>
                    <Button >Finalizar compra</Button>
                </CardInfo>

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
const OrderSection = styled.div`
    width: 90%;
    background-color: #FFF;
    margin-bottom: 30px;
    
    display: flex;
    position:  relative;
`;
const ProductScroll = styled.div`
    width: auto;
    padding-left: 10px;
    
    display: flex;
    overflow-x: scroll;
`
const CardInfo = styled.div`
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
`;
const CardSecurity = styled.div`
    width: 100%;
    gap: 10px;
    display: flex;
`;
const Input = styled.input`
    width: 100%;
    height: 52px;
    border-radius: 8px;
    margin-top: 8px;
    padding-left: 14px;
    font-size: 14px;
    color: #7E7E7E;
`;
const Button = styled.button`
    width: 100%;
    height: 52px;
    margin-top: 12px;
    background-color: #5381f1;
    border-radius: 8px;
    border: none;
    font-size: 14px;
    font-weight: 700;
    color: #FFFFFF;
`;
const ProductBox = styled.div`
  width: 150px;
  height: 180px;
  border-radius: 9px;
  box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.7);
  padding: 9px 14px 18px 14px;
  margin: 15px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 80px;
  }

  h1 {
    font-size: 11px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  h2 {
    font-size: 13px;
    color: #5381f1;
  }
`;
const ImgBox = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`;
const ProductInfo = styled.div``;

