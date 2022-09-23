import React from "react";
import styled from "styled-components";

import { Data } from "./Jogo";

function Tecla(props) {
    const [pressionado, setPressionado] = React.useState(false);    
    const {
        forcaLevel, setForcaLevel,
        forcaStatus, setForcaStatus,
        forcaPalavra, setForcaPalavra, 
        alfabeto, setAlfabeto
    } = React.useContext(Data);
    
    function adicionarLetra(inputletra){
        let letra = inputletra.split(",")
        let haveLetterInclude = false;

        if(!props.usado){
            const novoAlfa = [...alfabeto, ...letra];
            setAlfabeto(novoAlfa);

            letra.forEach(letter => { 
                if(forcaPalavra.includes(letter)){
                    haveLetterInclude = true;
                }
            })

            if(haveLetterInclude === false){
                setForcaLevel(forcaLevel + 1)
            }
        }
    }

    return (
        <BotaoTecla 
            usado={pressionado}
            onClick={() => {
                if(pressionado === false){ 
                    setPressionado(!pressionado);
                    adicionarLetra(props.keyb);
                }
            }}
            > 
                {props.keyb[0]} 
        </BotaoTecla>
    )
}

const BotaoTecla = styled.div`
    cursor: default;
    box-sizing: border-box;
    display: flex; 
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    width: 2rem;
    height: 2rem;

    ${props => {
        if(props.usado === true){
            return "background-color: #9faab5; color: #79818a;"
        }else{
            return "background-color: #e1ecf4; color: #39739d; border: 1px solid #39739d;"       
        }
    
    }}
`;

export default Tecla;