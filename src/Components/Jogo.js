import React from "react";

import "./reset.css"
import Forca from "./Forca";
import Teclado from "./Teclado";

import palavras from "./palavras";


const Data = React.createContext();

function Jogo(){
    const [forcaLevel, setForcaLevel] = React.useState(0);
    const [forcaPalavra, setForcaPalavra] = React.useState("");
    const [alfabeto, setAlfabeto] = React.useState([]);
    const [forcaStatus, setForcaStatus] = React.useState("Off"); // Off, In-Progress, Win, Lose

    function endGame(youWin=false){
        if(youWin){
            return setForcaStatus("Win");
        }
        setForcaStatus("Lose");
        setForcaLevel(6);
    }

    function startGame(){
        setForcaStatus("In-Progress");
        resetWord();
    }

    function resetWord(){
        let aleatorio =  Math.round(Math.random() * (0, palavras.length))
        setForcaPalavra(palavras[aleatorio]);
        setForcaLevel(0);
        setAlfabeto([]);
    }

    function filterWord(word){
        let newWord = word.normalize("NFD").replace(/[^a-zA-Z\s]/g, "");
        return newWord;
    }

    return(
        <Data.Provider value={{
            forcaLevel, setForcaLevel,
            forcaStatus, setForcaStatus,
            forcaPalavra, setForcaPalavra, 
            alfabeto, setAlfabeto,
            endGame, startGame, filterWord
        }}>
            <Forca level={forcaLevel} status={forcaStatus} palavra={forcaPalavra} compilado={palavras}/>
            <Teclado />
        </Data.Provider>
    );
}

export {Jogo, Data};