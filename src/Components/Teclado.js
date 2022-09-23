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
                        <Tecla keyb="Q" />
                        <Tecla keyb="W" />
                        <Tecla keyb="E" />
                        <Tecla keyb="R" />
                        <Tecla keyb="T" />
                        <Tecla keyb="Y" />
                        <Tecla keyb="U" />
                        <Tecla keyb="I" />
                        <Tecla keyb="O" />
                        <Tecla keyb="P" />
                    </KeyList>
                    <KeyList>
                        <Tecla keyb="A" />
                        <Tecla keyb="S" />
                        <Tecla keyb="D" />
                        <Tecla keyb="F" />
                        <Tecla keyb="G" />
                        <Tecla keyb="H" />
                        <Tecla keyb="J" />
                        <Tecla keyb="K" />
                        <Tecla keyb="L" />
                        <Tecla keyb="Ç" />
                    </KeyList>
                    <KeyList>
                        <Tecla keyb="Z" />
                        <Tecla keyb="X" />
                        <Tecla keyb="C" />
                        <Tecla keyb="V" />
                        <Tecla keyb="B" />
                        <Tecla keyb="N" />
                        <Tecla keyb="M" />
                    </KeyList>
                </Keys>
                <Resposta />
            </TecladoStyle>
        </>
    )
}


// Style SCSS
const TecladoStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 35%;
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
`;

export default Teclado;