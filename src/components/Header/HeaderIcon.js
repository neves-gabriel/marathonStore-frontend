import React from "react";
import styled from "styled-components";

export default function HeaderIcon() {

    return(
        <Icon src="./img/marathon-icon.png"/>
    );
}
// ::::::::::Styled-Components::::::::::
const Icon = styled.img`
    width: 40px;
    border-radius: 56px;
`