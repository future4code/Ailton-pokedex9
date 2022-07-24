import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled, { withTheme } from 'styled-components';
import logo from "../img/Logo.png";
import { ContainerHome } from "./styled";
import Fundo from '../img/Fundo.jpg';
import { useRequestData } from "../hooks/requestData/requestData";
import { renderType } from "../components/renderType/renderType"


const Container = styled.div` 
overflow-x: hidden;
`

const Header = styled.header`
height: 18vh;
width: 100vw;
background-color: aliceblue;
display: flex;
align-items: center;
justify-content: space-evenly;
color: white;
position: relative;
img {
     max-height: 15vh;
     max-width: 40vw;
    }
`

const TodosOsPokemons = styled.div`
position: absolute;
width: 210px;
height: 36px;
left: 100px;
top: 62px;

font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 36px;
/* identical to box height */

text-decoration-line: underline;

color: #1A1A1A;
&:hover{
    cursor: pointer;
}
`
const NamePokemon = styled.div`
display: flex;
height: 20vh;
flex-direction: column;
align-self: center;
align-items: center;
font-family: Verdana, Arial, Helvetica, sans-serif;
color:#0d30a8;
font-size: 10px;
font-weight: bold;
text-shadow: 2px 4px 5px #76bfd1;
text-transform: uppercase;
.images{
    margin: 0;
    padding: 0;
    height: 70%;
    width: 50%;
    
    img{
        height: 75%;
    }
}
`

const Imagens = styled.div`
height: auto; 
`

const DataContainer = styled.div` 
border: 1px solid #fff50f; 
background-image: url(${Fundo});
background-repeat: no-repeat;
background-size: cover;
box-shadow: 1px 0px 3px 0px #ffc222;
border-radius: 20px;
margin: 20px;
width: 90vw;
min-height: 70vh;
display: flex;
flex-direction: column;
h2{
    margin: 0 auto;
}
`
const Pokedex = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 10px;

position: absolute;
width: 287px;
height: 74px;
left: 70%;
top: 20%;

background: #33A4F5;
border-radius: 8px;
&:hover{
    cursor: pointer;
}
`
const PokeP = styled.div`
width: 106px;
height: 36px;

font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 36px;
color: #FFFFFF;
flex: none;
order: 0;
flex-grow: 0;
`

const MoveFundos = styled.li`
position: relative;
width: 292px;
height: 700px;
left: 450px;
top: -135px;
background: #FFFFFF;
border-radius: 8px;
border: 5px solid black;
`

const State = styled.ul`
width: 162px;
height: 109px;

font-family: 'Montserrat';
font-weight: 300;
font-size: 14px;
line-height: 25px;
/* identical to box height */

color: #000000;

/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
`

const Moves = styled.div`
position: relative;
width: 87px;
height: 100px;
left: 100px;
top: -20px;

font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 24px;
line-height: 29px;
color: #000000;
`
//======================================================================
const BaseState = styled.div`
        position: relative;
    width: 292px;
    height: 409px;
    left: -433px;
    top: -418px;
    background: #FFFFFF;
    border-radius: 8px;
    border: 5px solid black;
`
const Base= styled.div`
position: relative;
width: 87px;
height: 100px;
left: 100px;
top: -20px;

font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 24px;
line-height: 29px;
color: #000000;
`
const BaseAtaks= styled.ul`
width: 172px;
height: 150px;
font-family: 'Montserrat';
font-weight: 300;
font-size: 11px;
line-height: 22px;
/* identical to box height */

color: #000000;

/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
`

const Detalhes = () => {


    const history = useHistory()
    const params = useParams()
    const [pokeDetails] = useRequestData(params.pokemon)

    let totalStats = 0
    const renderStats = pokeDetails && pokeDetails.stats.map((status) => {
        totalStats = totalStats + Number(status.base_stat)
        return <li>{status.stat.name} - {status.base_stat}</li>
    })

    const goToHome = () => {
        history.push(`/`)
    }

    const goToPokedex = () => {
        history.push(`/pokedex`)
    }


    if (pokeDetails) {
        return (
            <Container >
                <Header>
                    <TodosOsPokemons onClick={goToHome}>
                        Página Inicial
                    </TodosOsPokemons>
                    <img src={logo} alt="Logotipo pokemon" />
                    <Pokedex onClick={goToPokedex}><PokeP>
                        Pokedex
                    </PokeP></Pokedex>
                </Header>

                <ContainerHome key={pokeDetails.id}>
                    <DataContainer>
                        <NamePokemon>
                            <h3># {pokeDetails && pokeDetails.id}</h3>
                            <h1>{pokeDetails.name.toUpperCase()}</h1>
                            <div>
                                {pokeDetails && renderType(pokeDetails.types[0].type.name)}
                                {pokeDetails && pokeDetails.types[1] && renderType(pokeDetails.types[1].type.name)}
                            </div>
                            
                            <div className='images'><Imagens>
                                <img src={pokeDetails.sprites.front_default} alt={`${pokeDetails.name} de frente`} />
                                <img src={pokeDetails.sprites.back_default} alt={`${pokeDetails.name} de costas`} />
                                </Imagens>  </div>
                            <MoveFundos><Moves> <h5>Moves</h5></Moves>
                          <State><ul>                               
                                <li> {pokeDetails && pokeDetails.moves[0].move.name}</li>
                                <li>{pokeDetails && pokeDetails.moves[1].move.name}</li>
                                <li>{pokeDetails && pokeDetails.moves[2].move.name}</li>
                                <li>{pokeDetails && pokeDetails.moves[3].move.name}</li>
                            </ul></State></MoveFundos>
                           <BaseState><Base><h5>Base Stats</h5></Base>
                           <BaseAtaks><ul>
                                {renderStats}
                               <li>total - {totalStats}</li>
                            </ul></BaseAtaks> </BaseState> 
                        </NamePokemon>

                    </DataContainer>
                </ContainerHome>

            </Container>
        )
    } else {
        return <h1>Loading...</h1>
    }

};

export default Detalhes;
