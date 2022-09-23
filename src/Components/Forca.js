import React from "react";
import styled from "styled-components";

// Imagens > Forca
import forca0 from "../assets/forca0.png";
import forca1 from "../assets/forca1.png";
import forca2 from "../assets/forca2.png";
import forca3 from "../assets/forca3.png";
import forca4 from "../assets/forca4.png";
import forca5 from "../assets/forca5.png";
import forca6 from "../assets/forca6.png";

function Forca(props){
    const [currentForca, setCurrentForca] = React.useState(forca0);
    function current(){
        switch (props.level) {
            case 0: setCurrentForca(forca0); break;
            case 1: setCurrentForca(forca1); break;
            case 2: setCurrentForca(forca2); break;
            case 3: setCurrentForca(forca3); break;
            case 4: setCurrentForca(forca4); break;
            case 5: setCurrentForca(forca5); break;
            case 6: setCurrentForca(forca6); break;
        }
    } 
    return (
        <BaseForca>
            <img src={currentForca} alt="forca" />
            <button>Escolher Palavra</button>
        </BaseForca>
    )
}



// Style SCSS
const BaseForca = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    img {
        height: 400px;
    }
    button{
        border-radius: 4px;
        background-color: #27ae60;
        padding: 8px 12px;
        color: white;
        border: none;
        outline: none;
        font-weight: 600;
        cursor: pointer;
    }
`; 

export default Forca;