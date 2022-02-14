import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AuthContext } from "../providers/auth";
import { useContext } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

import { IconContext } from "react-icons";
import { AiOutlinePlusCircle } from "react-icons/ai";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SideBar from "../components/PageContent/SideBar";
import CartScreen from "../components/PageContent/CartScreen";

export default function ProductsPage() {
  const { sideBarTrigger } = React.useContext(AuthContext);
  const { cartTrigger } = React.useContext(AuthContext);
  const { cartInfo, setCartInfo } = React.useContext(AuthContext);
  const { URL } = useContext(AuthContext);
  const [content, setContent] = useState([]);

  useEffect(() => {
    const promise = axios.get(URL);
    promise.then((response) => {
      setContent(response.data);
    });
    promise.catch((error) => alert(error));
  }, [URL]);
  console.log(cartInfo);
  return (
    <>
      <Container triggered={sideBarTrigger || cartTrigger}>
        <Header />
        <ProductScroll>
          {content.map((items) => (
            <ProductBox>
              <IconContext.Provider value={{ color: "#5381f1", size: "32px" }}>
                <AiOutlinePlusCircle
                  onClick={() => setCartInfo([...cartInfo, items])}
                />
              </IconContext.Provider>
              <ImgBox>
                <img src={items.imgURL} />
              </ImgBox>
              <ProductInfo>
                <h1>{items.name}</h1>
                <p>{items.description}</p>
                <h2>R${items.price}</h2>
              </ProductInfo>
            </ProductBox>
          ))}
        </ProductScroll>
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

  background-color: #fff;
  filter: brightness(${(props) => (props.triggered ? "0.2" : "1")});

  display: flex;
  flex-direction: column;
  align-items: center;
  position: ${(props) => (props.triggered ? "fixed" : "")};
  z-index: 2;
  overflow-y: scroll;
`;
const ProductScroll = styled.div``;
const ProductBox = styled.div`
  width: 300px;
  height: 416px;
  border-radius: 9px;
  margin-top: 25px;
  box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.7);
  padding: 18px 14px 18px 14px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 200px;
  }

  h1 {
    font-size: 22px;
    font-weight: 700;
  }
  h2 {
    color: #5381f1;
  }
  p {
    margin-bottom: 15px;
  }
`;
const ProductInfo = styled.div``;
const ImgBox = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`;
const CartBox = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;
`;
