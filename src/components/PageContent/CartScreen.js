import React from "react";
import styled from "styled-components";
import { AuthContext } from "../../providers/auth.js";
import OutsideClickHandler from "react-outside-click-handler";

export default function CartScreen() {
  const { setCartTrigger } = React.useContext(AuthContext);

  return (
    <Container>
      <OutsideClickHandler onOutsideClick={() => setCartTrigger(false)}>
        <CartBox>
          <h1>
            Aviso:
            <br />
          </h1>
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
  width: 248px;
  height: 210px;
  background-color: #ffffff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    color: black;
  }
`;
