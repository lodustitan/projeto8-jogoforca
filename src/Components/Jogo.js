import React from "react";
import styled from "styled-components";

import Forca from "./Forca";
import Teclado from "./Teclado";

import palavras from "./palavras";


const Data = React.createContext();

function Jogo(){
    const [forcaLevel, setForcaLevel] = React.useState(0);
    const [forcaStatus, setForcaStatus] = React.useState("inProgress");
    const [forcaPalavra, setForcaPalavra] = React.useState("teste");
    const [alfabeto, setAlfabeto] = React.useState([])

    return(
        <Data.Provider value={{
            forcaLevel, setForcaLevel,
            forcaStatus, setForcaStatus,
            forcaPalavra, setForcaPalavra, 
            alfabeto, setAlfabeto
        }}>
            <Forca level={forcaLevel} status={forcaStatus} palavra={forcaPalavra} compilado={palavras}/>
            <Teclado />
        </Data.Provider>
    );
}

export {Jogo, Data};