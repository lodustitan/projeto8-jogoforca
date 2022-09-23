import ReactDOM from "react-dom";

// Componentes
import {Jogo} from "./Components/Jogo";

function App(){
    return <Jogo />;
}

ReactDOM.render( <App />, document.querySelector(".root") );