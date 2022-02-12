import React from "react";
import styled from "styled-components";
import { AuthContext } from "../../providers/auth";

export default function SideBar() {

    const { sideBarTrigger, setSideBarTrigger } = React.useContext(AuthContext);


    return (
        <Container onClick={() => setSideBarTrigger(false)}>
            <h1>sidebar</h1>
        </Container>
    );
}
// ::::::::::Styled-Components::::::::::
const Container = styled.div`
    width: 300px;
    min-height: 100vh;
    position: fixed;
    right: 0;
    z-index: 3;
    background-color: aliceblue;
`