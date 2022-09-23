import React from "react";
import styled from "styled-components";

function Tecla(props) {
    return (
        <BotaoTecla> {props.keyb} </BotaoTecla>
    )
}

const BotaoTecla = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    width: 2rem;
    height: 2rem;
    background-color: #9faab5;
    color: #79818a;
`;

export default Tecla;