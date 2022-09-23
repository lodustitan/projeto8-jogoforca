import React from "react"
import {Data} from "./Jogo"

import styled from "styled-components";

function Letreiro(props) {
    const {alfabeto, setAlfabeto} = React.useContext(Data);


    return <h1>{(props.palavra).split("").map((word)=>{
        if(alfabeto.includes(word)){ return word; }
        else{ return "_"; }
    })}</h1>
}

const H1Boladao = styled.h1`
    letter-spacing: 50px;
`;

export default Letreiro