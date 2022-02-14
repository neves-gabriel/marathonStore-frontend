import React from "react";
import styled from "styled-components";
import { AuthContext } from "../../providers/auth.js";
import OutsideClickHandler from "react-outside-click-handler";
import { useNavigate } from "react-router-dom";

import { IconContext } from "react-icons";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { IoMdRemoveCircleOutline } from "react-icons/io";

export default function CartScreen() {

  const { setCartTrigger } = React.useContext(AuthContext);
  const { cartInfo, setCartInfo } = React.useContext(AuthContext);
  const { count, setCount } = React.useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <Container>
      <OutsideClickHandler onOutsideClick={() => setCartTrigger(false)}>
        <CartBox>
          <BoxHeader>
            <h1>Seu carrinho</h1>
          </BoxHeader>
          <OrderBox>
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
                    {/* <ButtonLayer>
                    <IconContext.Provider value={{ color: "#5381f1", size: "32px" }}>
                      <IoMdRemoveCircleOutline
                        onClick={() => setCount(count - 1)}
                      />
                    </IconContext.Provider>
                    <h1>{count}</h1>
                    <IconContext.Provider value={{ color: "#5381f1", size: "32px" }}>
                      <AiOutlinePlusCircle
                        onClick={() => setCount(count + 1)}
                      />
                    </IconContext.Provider>
                  </ButtonLayer> */}
                  </>
                ))}
            </ProductScroll>
          </OrderBox>
          <BoxFooter onClick={() => { navigate("/checkout"); setCartTrigger(false) }}
          >
            <h1>Checkout</h1>
          </BoxFooter>
        </CartBox>
      </OutsideClickHandler>
    </Container>
  );
}
// ::::::::::Styled-Components::::::::::
const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 25px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 4;
  top: 0;
  left: 0;
`;
const OrderBox = styled.div`
    width: 90%;
    margin-top: 130px;
    background-color: #FFF;
`
const ProductScroll = styled.div`
    width: auto;
    padding-left: 10px;

    display: flex;
    overflow-x: scroll;
`
const CartBox = styled.div`
  width: 330px;
  height: 500px;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 8px;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const BoxHeader = styled.div`
  width: 75%;
  height: 75px;
  background-color: #262626;
  padding: 20px;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;

  h1 {
    font-family: "Montserrat", sans-serif;
    font-size: 22px;
    text-decoration: overline;
    font-weight: 400;
    color: #e5e5e5;
    margin-left: 10px;
  }
`;
const ProductBox = styled.div`
  width: 150px;
  height: 180px;
  border-radius: 9px;
  margin-top: 5px;
  margin-bottom: 15px;
  margin-right: 10px;
  box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.7);
  padding: 9px 14px 18px 14px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 80px;
  }
`;
const ImgBox = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`;
const ProductInfo = styled.div`
    h1 {
        font-size: 10px;

    }
    h2 {
        font-size: 10px;
        color: #5381f1;
        margin-top: 10px;
    }
`;
const BoxFooter = styled.div`
  width: 75%;
  height: 75px;
  background-color: #262626;
  padding: 20px;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  margin-bottom: 130px;

  h1 {
    font-family: "Montserrat", sans-serif;
    font-size: 22px;
    text-decoration: overline;
    font-weight: 400;
    color: #e5e5e5;
    margin-left: 10px;
  }
`;
const ButtonLayer = styled.div`
  
  display: flex;
  align-items: center;

  h1{
    margin: 15px;
  }
`