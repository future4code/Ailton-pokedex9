import Headers from "../../components/headers/Headers"
import { useParams } from 'react-router-dom'
import { useRequestData } from '../../hooks/requestData/requestData'

function DetailPages() {

  const params = useParams()

  const [pokeDetails] = useRequestData(params.name)

  const renderStats = pokeDetails && pokeDetails.stats.map((status) => {
    return <li>{status.stat.name} - {status.base_stat}</li>
  })
  
  return (
    <>
      <Headers />
      <main>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>Detalhes</h1>

        <h3># {pokeDetails && pokeDetails.id}</h3>
        <h2>{pokeDetails && pokeDetails.name}</h2>
        <p>{pokeDetails && pokeDetails.types[0].type.name} {pokeDetails && pokeDetails.types[1] && pokeDetails.types[1].type.name}</p>

        <img src={pokeDetails && pokeDetails.sprites.other.dream_world.front_default} />
        
        <img src={pokeDetails && pokeDetails.sprites.front_default}/> 
        <img src={pokeDetails && pokeDetails.sprites.back_default}/>

        <h4>Moves</h4>
        <ul>
          <li>{pokeDetails && pokeDetails.moves[0].move.name}</li>
          <li>{pokeDetails && pokeDetails.moves[1].move.name}</li>
          <li>{pokeDetails && pokeDetails.moves[2].move.name}</li>
          <li>{pokeDetails && pokeDetails.moves[3].move.name}</li>
        </ul>

        <h4>Base Stats</h4>
        <ul>
          {renderStats}
        </ul>
      </main>
      
    </>
  );
}

export default DetailPages;
