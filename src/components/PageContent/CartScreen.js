import React from "react";
import styled from "styled-components";
import { AuthContext } from "../../providers/auth.js";
import OutsideClickHandler from "react-outside-click-handler";
import { useNavigate } from "react-router-dom";

export default function CartScreen() {

  const { setCartTrigger } = React.useContext(AuthContext);
  const { cartInfo, setCartInfo } = React.useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <Container>
      <OutsideClickHandler onOutsideClick={() => setCartTrigger(false)}>
        <CartBox>
          <BoxHeader>
            <h1>Seu carrinho</h1>
          </BoxHeader>
          {/* {cartInfo !== [] && cartInfo.map((items) => (
            <ProductBox>
              <ImgBox>
                <img src={items.imgURL} />
              </ImgBox>
              <ProductInfo>
                <h1>{items.name}</h1>
                <p>{items.description}</p>
                <h2>R${items.price}</h2>
              </ProductInfo>
            </ProductBox>
          ))} */}
          <BoxFooter onClick={() => 
            navigate("/checkout")
            
            }>
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
`;
const CartBox = styled.div`
  width: 330px;
  height: 500px;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  h1 {
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    color: black;
  }
`;
const BoxHeader = styled.div`
    width: 100%;
    height: 75px;
    background-color: #262626;
    padding: 20px;
    margin-bottom: 10px;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        font-family: "Montserrat", sans-serif;
        font-size: 22px;
        text-decoration: overline;
        font-weight: 400;
        color: #e5e5e5;
        margin-left: 10px;
    }
`
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

    img{
        width: 200px;
    }

    h1{
        font-size: 22px;
        font-weight: 700;
    }
    h2{
        color:  #5381f1;
    }
    p{
        margin-bottom: 15px;  
    }
`
const ImgBox = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
`
const ProductInfo = styled.div`
`
const BoxFooter = styled.div`
    width: 100%;
    height: 75px;
    background-color: #262626;
    padding: 20px;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        font-family: "Montserrat", sans-serif;
        font-size: 22px;
        text-decoration: overline;
        font-weight: 400;
        color: #e5e5e5;
        margin-left: 10px;
    }
`
