// import { useNavigate } from "react-router-dom";

function PokeCard(props) {
    // const navigate = useNavigate();
    // const {id, name} = props.pokemon;

    return ( 
    <section>
        <span>Nº:{props.id}</span>
        <span>{props.name.toUpperCase()} - </span>        
        <button>Capturar!</button>
        {/* <button onClick={() => goToDetailPage(navigate, name)}>Detalhes</button> */}
        
    </section>
    )
}

export default PokeCard;
