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


    return (
        <>
            <Container>
                <Header />
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
        </>
    );
}

// ::::::::::Styled-Components::::::::::
const Container = styled.div`
  width: 100%;

  background-color: #fff;
  filter: brightness(${(props) => (props.triggered ? "0.2" : "1")});

  display: flex;
  flex-direction: column;
  align-items: center;
  position: ${(props) => (props.triggered ? "fixed" : "")};
  z-index: 2; 
  overflow-y: scroll;
`;
const CardInfo = styled.div`
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
`
const CardSecurity = styled.div`
    width: 100%;
    gap: 10px;
    display: flex;
`
const Input = styled.input`
    width: 100%;
    height: 52px;
    border-radius: 8px;
    margin-top: 8px;
    padding-left: 14px;
    font-size: 14px;
    color: #7E7E7E;
`
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
`
