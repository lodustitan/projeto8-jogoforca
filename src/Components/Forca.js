import React from "react";
import styled from "styled-components";

import { Data } from "./Jogo"
import forca0 from "../assets/forca0.png";
import forca1 from "../assets/forca1.png";
import forca2 from "../assets/forca2.png";
import forca3 from "../assets/forca3.png";
import forca4 from "../assets/forca4.png";
import forca5 from "../assets/forca5.png";
import forca6 from "../assets/forca6.png";

// Imagens > Forca

import Letreiro from "./Letreiro";

function Forca(props){
    const [foto, setFoto] = React.useState(forca0)
    const vemTudoLogoPorraKKK = React.useContext(Data);

    React.useEffect(() => {
        switch (vemTudoLogoPorraKKK.forcaLevel) {
            case 0: setFoto(forca0); break;
            case 1: setFoto(forca1); break;
            case 2: setFoto(forca2); break;
            case 3: setFoto(forca3); break;
            case 4: setFoto(forca4); break;
            case 5: setFoto(forca5); break;
            case 6: setFoto(forca6); break;
            default: break;
        }
    }, [vemTudoLogoPorraKKK.forcaLevel])


    return (
        <BaseForca>
            <div>
                <img 
                    data-identifier="game-image"
                    src={foto} alt="forca" 
                />
            </div>
            <div>
                <Butaum 
                    onClick={() => vemTudoLogoPorraKKK.startGame()}
                    data-identifier="choose-word"
                >Escolher Palavra</Butaum>
                <Letreiro palavra={vemTudoLogoPorraKKK.forcaPalavra} />
            </div>
        </BaseForca>
    )
}



// Style SCSS
const Butaum = styled.button`
    border-radius: 4px;
    background-color: #27ae60;
    padding: 8px 12px;
    color: white;
    border: none;
    outline: none;
    font-weight: 600;
    cursor: pointer;
`;
const BaseForca = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }
    img {
        height: 400px;
    }
`; 

export default Forca;