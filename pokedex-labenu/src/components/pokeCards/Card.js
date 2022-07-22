import { useNavigate } from "react-router-dom";
import { useRequestData } from '../../hooks/requestData/requestData'
import { goToDetailPage } from '../../routes/coordinator'
import { renderType } from '../renderType/renderType'


function PokeCard(props) {
    const navigate = useNavigate();

    const [pokeDetails] = useRequestData(props.name)

    return (
        <section>
            <span>Nº:{pokeDetails && pokeDetails.id}</span>
            <span>{pokeDetails && pokeDetails.name.toUpperCase()} - </span> 
            <img src={pokeDetails && pokeDetails.sprites.other.dream_world.front_default}/>   
            <span>
                {pokeDetails && renderType(pokeDetails.types[0].type.name)}
                {pokeDetails && pokeDetails.types[1] && renderType(pokeDetails.types[1].type.name)}
            </span>    
            <button>Capturar!</button>
            <button onClick={() => goToDetailPage(navigate, props.name)}>Detalhes</button>
        </section>
    )
}

export default PokeCard;
