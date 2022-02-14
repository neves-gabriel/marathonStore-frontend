import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { AuthContext } from "../../providers/auth";
import { useLocation, useSearchParams } from "react-router-dom";

import { IconContext } from "react-icons";
import { AiOutlinePlusCircle } from "react-icons/ai";

export default function ProductSection() {

    const [released, setReleased] = useState([]);
    const [highlights, setHighlights] = useState([]);
    const { cartInfo, setCartInfo } = React.useContext(AuthContext);
    const location = useLocation();
    const category = location.pathname.replace("/categorias/", "")

    useEffect(() => {
        const promise = axios.get(`https://marathonstore-backend.herokuapp.com/products`);
        promise.then((response) => {
            setHighlights(response.data);
        });
        promise.catch((error) => alert(error));
    }, [category]);

    return (
        <Container>
            <ProductScroll>
                {highlights.map((items) => (
                    <ProductBox>
                        <ImgBox>
                            <img src={items.imgURL} />
                        </ImgBox>
                        <ProductInfo>
                            <h1>{items.name}</h1>
                            <h2>R${items.price}</h2>
                        </ProductInfo>
                    </ProductBox>
                ))}
            </ProductScroll>
        </Container>
    );
}
// ::::::::::Styled-Components::::::::::
const Container = styled.div`
    width: 90%;
    background-color: #FFF;
    display: flex;
    position:  relative;

    h1{
        font-size: 26px;
        font-weight: 700;
        color: #E5E5E5;
        margin-left: 10px;
    }
`
const ProductScroll = styled.div`
    min-width: 100;
    padding-left: 10px;
    
    display: flex;
    overflow-x: scroll;
`
const ProductBox = styled.div`
    width: 200px;
    height: 216px;
    border-radius: 9px;
    margin-top: 5px;
    margin-bottom: 15px;
    margin-right: 10px;
    box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.7);
    padding: 18px 14px 18px 14px;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const ProductInfo = styled.div`
    h1 {
        font-size: 10px;

    }
    h2 {
        font-size: 10px;

    }
    p {
        font-size: 10px;

    }
`;
const ImgBox = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;    
  
    img {
        width: 90px;
        height: 90px;
    }
`;
const CartBox = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;
`;