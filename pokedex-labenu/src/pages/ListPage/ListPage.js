import Headers from "../../components/headers/Headers"
import PokeCard from "../../components/pokeCards/Card"

import { useNavigate } from 'react-router-dom'
import { goToDetailPage, goToPokedexPage } from '../../routes/coordinator'

function ListPage() {
  const navigate = useNavigate()

  return (
    <>
      <Headers />

      <PokeCard id={1} name={'bulbasaur'}/>
      <PokeCard id={1} name={'bulbasaur'}/>
      <PokeCard id={1} name={'bulbasaur'}/>
      <PokeCard id={1} name={'bulbasaur'}/>
      <PokeCard id={1} name={'bulbasaur'}/>
      <PokeCard id={1} name={'bulbasaur'}/>
      <PokeCard id={1} name={'bulbasaur'}/>
      <PokeCard id={1} name={'bulbasaur'}/>

      <button onClick={() => goToPokedexPage(navigate)}>Pokedex</button>
      <button onClick={() => goToDetailPage(navigate, 'bulbasaur')}>Detalhes</button>
    </>
  )
  
}
  
  


export default ListPage;
