import React from "react";
import styled from "styled-components";

import Tecla from "./Tecla";
import Resposta from "./Resposta";


function Teclado() {
    
    return (
        <>
            <TecladoStyle>
                <Keys>
                    <KeyList>
                        <Tecla keyb="q" />
                        <Tecla keyb="w" />
                        <Tecla keyb="e,é,ê" />
                        <Tecla keyb="r" />
                        <Tecla keyb="t" />
                        <Tecla keyb="y,ý" />
                        <Tecla keyb="u,ú,û" />
                        <Tecla keyb="i,í,î" />
                        <Tecla keyb="o,ó,ô,õ" />
                        <Tecla keyb="p" />
                    </KeyList>
                    <KeyList>
                        <Tecla keyb="a,á,ã,â" />
                        <Tecla keyb="s" />
                        <Tecla keyb="d" />
                        <Tecla keyb="f" />
                        <Tecla keyb="g" />
                        <Tecla keyb="h" />
                        <Tecla keyb="j" />
                        <Tecla keyb="k" />
                        <Tecla keyb="l" />
                    </KeyList>
                    <KeyList>
                        <Tecla keyb="z" />
                        <Tecla keyb="x" />
                        <Tecla keyb="c,ç" />
                        <Tecla keyb="v" />
                        <Tecla keyb="b" />
                        <Tecla keyb="n" />
                        <Tecla keyb="m" />
                    </KeyList>
                </Keys>
                <Resposta />
            </TecladoStyle>
        </>
    )
}


// Style SCSS
const TecladoStyle = styled.div`
font-family: 'Source Sans Pro', sans-serif;
min-width: 345px;
background-color: #6aa84f;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 35%;
    @media screen and (max-width: 760px){
        width: 100%;
    }
`;
const Keys = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const KeyList = styled.div`
    display: flex;
    margin-top: 6px;
    div{
        margin: 0 6px;
    }
    @media screen and (max-width: 760px){
        max-width: 100%;
    }
`;

export default Teclado;