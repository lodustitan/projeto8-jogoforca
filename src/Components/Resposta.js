import React from "react";
import styled from "styled-components";
import { Data } from "./Jogo";


function Resposta(props) {
    const vemTudoLogoPorraKKK = React.useContext(Data);
    const [inputPalavra, setInputPalavra] = React.useState("");
    const [habilityInput, setHabilityInput] = React.useState(true);
    
    React.useEffect(()=>{
        if( disabledInput() ){ setHabilityInput(true) }
        else{ setHabilityInput(false) }
    }, [vemTudoLogoPorraKKK.forcaStatus])
    
    function verifyWord(){
        if(vemTudoLogoPorraKKK.forcaStatus !== "In-Progress"){
            return;
        }
        let newWordWhioutSpecial = vemTudoLogoPorraKKK.filterWord(vemTudoLogoPorraKKK.forcaPalavra);
        let inputFiltred = vemTudoLogoPorraKKK.filterWord(inputPalavra.toLocaleLowerCase());
       
        if(inputFiltred === newWordWhioutSpecial){
            vemTudoLogoPorraKKK.endGame(true);
        }else{
            vemTudoLogoPorraKKK.endGame(false);
        }
        setInputPalavra("")
    }

    function disabledInput(){
        if(
            vemTudoLogoPorraKKK.forcaStatus === "Off" ||
            vemTudoLogoPorraKKK.forcaStatus === "Win" ||
            vemTudoLogoPorraKKK.forcaStatus === "Lose"
        ) {
            return true
        }
    }

    return (
        <RespostaStyle>
            <span>Ja sei a Resposta!</span>
            <input 
                data-identifier="type-guess"
                type="text" 
                onChange={(e) => setInputPalavra(e.target.value)}
                value={inputPalavra}
                disabled={ (habilityInput? "disabled": "")}
            />
            <button 
                data-identifier="guess-button"
                onClick={verifyWord}
            >Chutar</button>
        </RespostaStyle>
    )
}

const RespostaStyle = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 2rem;
    input{
        width: 60%;
        height: 2rem;
    }
    button{
        color: #39739d;
        border: 1px solid #39739d;
        background-color: #e1ecf4;
        border-radius: 4px;
        font-weight: 800;
        height: 2rem;
    }
`;

export default Resposta;