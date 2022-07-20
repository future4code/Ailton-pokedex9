import { useNavigate } from "react-router-dom";
import { goToDetailPage } from "../../routes/Direction";

function PokeCard(props) {
    const navigate = useNavigate();
    const {id, name} = props.pokemon;

    return ( 
    <section>
        <span>Nº:{id}</span>
        <span>{name.toUpperCase()} - </span>        
        <button>Capturar!</button>
        <button onClick={() => goToDetailPage(navigate, name)}>Detalhes</button>
        
    </section>
    )
}

export default PokeCard;
