import React from "react";
import styled from "styled-components";

import { Data } from "./Jogo";

function Tecla(props) {
    const [pressionado, setPressionado] = React.useState(true);    
    const vemTudoLogoPorraKKK = React.useContext(Data);
    const {filterWord} = vemTudoLogoPorraKKK;
    
    React.useEffect(() =>{
        liberarBotoes()
    }, [vemTudoLogoPorraKKK.forcaPalavra]);

    React.useEffect(() =>{
        verifyEndGame();
    }, [pressionado]);
    
    function verifyWin(){
        let containsAll = true;

        (vemTudoLogoPorraKKK.forcaPalavra)
        .split("")
        .forEach((every, index) =>{
            if( !(vemTudoLogoPorraKKK.alfabeto).includes(filterWord(every)) ){
                containsAll = false;
            }
        })
        
        if(containsAll) { return true };
    }
    
    function verifyLose(){
        if(vemTudoLogoPorraKKK.forcaLevel === 6){
            return true
        }
    }

    function verifyEndGame(){
        if(verifyLose()){
            console.log("entrou aqui, e perdeu o jogo")
            vemTudoLogoPorraKKK.endGame(false);
        }
        if(verifyWin()){
            console.log("entrou aqui, e ganhou o jogo")
            vemTudoLogoPorraKKK.endGame(true);
        }
    }

    function liberarBotoes(){
        if(vemTudoLogoPorraKKK.forcaPalavra !== "") {
            setPressionado(false);
        }
    }

    function adicionarLetra(inputletra){
        if( vemTudoLogoPorraKKK.forcaStatus === "Win" || 
            vemTudoLogoPorraKKK.forcaStatus === "Lose"){
            return;
        }
        let letra = inputletra.split(",")
        let haveLetterInclude = false;

        setPressionado(!pressionado);
        
        if(!props.usado){
            const novoAlfa = [...vemTudoLogoPorraKKK.alfabeto, ...letra];
            vemTudoLogoPorraKKK.setAlfabeto(novoAlfa);

            letra.forEach(letter => { 
                if(vemTudoLogoPorraKKK.forcaPalavra.includes(letter)){
                    haveLetterInclude = true;
                }
            })

            if(haveLetterInclude === false){
                vemTudoLogoPorraKKK.setForcaLevel(vemTudoLogoPorraKKK.forcaLevel + 1)
            }
        }
    }

    return (
        <BotaoTecla 
            data-identifier="letter"
            usado={pressionado}
            onClick={() => {
                if(pressionado === false){ 
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