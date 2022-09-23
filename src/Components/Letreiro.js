import React from "react"
import {Data} from "./Jogo"

import styled from "styled-components";

function Letreiro(props) {
    const ContextoGlobal = React.useContext(Data);
    
    function colorH1(){
        if(ContextoGlobal.forcaStatus === "Win"){ return "win" }
        else if(ContextoGlobal.forcaStatus === "Lose"){ return "lose" }
        else { return "ingame" }
    }

    return (
        <H1Boladao 
            data-identifier="word"
            status={ colorH1() }>
                {(props.palavra).split("").map((letter)=>{
                    if((ContextoGlobal.alfabeto).includes(letter) ||
                    ContextoGlobal.forcaStatus === "Win" || 
                    ContextoGlobal.forcaStatus === "Lose"){ return letter; }
                    else{ return "_"; }
                })}
        </H1Boladao>
    );
}

const H1Boladao = styled.h1`
    letter-spacing: 10px;
    color: ${props => { 
        if(props.status === "win"){
            return "#7BC296";
        }else if(props.status === "lose"){
            return "#f44336"; 
        }else{
            return "black";
        }
    }}
`;

export default Letreiro