import React from "react";
import styled from "styled-components";
import { AuthContext } from "../../providers/auth";

import CartIcon from "./CartIcon";

export default function Footer() {
  const { setCartTrigger } = React.useContext(AuthContext);

  return (
    <Container onClick={() => setCartTrigger(true)}>
      <CartIcon  />
    </Container>
  );
}
// ::::::::::Styled-Components::::::::::
const Container = styled.div`
  width: 100%;
  padding: 20px;
  position: absolute;
  margin-top: 400px;

  display: flex;
  justify-content: flex-end;
`;
