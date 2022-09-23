import React from "react";
import styled from "styled-components";

import Forca from "./Forca";
import Teclado from "./Teclado";

function Jogo(){
    const [forcaLevel, setForcaLevel] = React.useState(2);

    return(
        <>
            <Forca level={forcaLevel}/>
            <Teclado />
        </>
    );
}

export default Jogo;