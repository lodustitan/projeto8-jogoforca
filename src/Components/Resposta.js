import React from "react";
import styled from "styled-components";


function Resposta(props) {
    return (
        <RespostaStyle>
            <span>Ja sei a Resposta!</span>
            <input type="text" />
            <button>Chutar</button>
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