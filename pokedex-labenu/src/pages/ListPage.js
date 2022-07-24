import React, { useContext } from 'react';
import { useHistory, } from 'react-router-dom';
import { useEffect } from 'react';
import PokemonContext from '../global/Context';
import PokemonCard from '../components/Card/Card';
import { ContainerHome, Pagina } from "./styled";
import styled from 'styled-components';
import logo from "../img/Logo.png";

const Container = styled.div` 
overflow-x: hidden;

`

const Header = styled.header`
height: 18vh;
width: 100vw;
background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(19,86,2,1) 0%, rgba(13,124,78,1) 0%, rgba(9,148,127,1) 51%, rgba(0,212,255,1) 100%);
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
const Pages = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
padding: 4px;
flex-wrap: wrap;
background: whitesmoke;
`
const PagesIndex = styled.button`
border: none;
background-color: transparent;
color: #33A4F5;
margin: 20px 4px 8px 4px;
&:hover{
    cursor: pointer;
    font-weight: bold;
}
`

const CurrentPage = styled.button`
border: none;
background-color: transparent;
color: black;
margin: 20px 4px 8px 4px;
font-weight: bold;
font-size: medium;
&:hover{
    cursor: pointer;   
}
`

const Home = () => {
    const { states, setters, getters } = useContext(PokemonContext)

    const { pokemon, page, offset, pokedex } = states
    const { setPokemon, setPage, setOffset, setPokedex } = setters
    const { getPokemon } = getters

    useEffect(() => {
        getPokemon()
    }, [offset])

    const history = useHistory()

    const goToPokedex = () => {
            history.push(`/pokedex`)
        }

    const pokemonPerPage = 20
    const totalPages = Math.ceil(pokemon.length / pokemonPerPage)
    const startIndex = page * pokemonPerPage
    const endIndex = startIndex + pokemonPerPage
    const currentPokemon = pokemon.slice(startIndex, endIndex)

    const pages = Array.from(Array(totalPages), (item, index) => {
        if (index === page) {
            return <CurrentPage key={index} onClick={() => setPage(index)}>{index + 1}</CurrentPage>
        } else {
            return <PagesIndex key={index} onClick={() => setPage(index)}>{index + 1}</PagesIndex>
        }
        
    })

    const cardsPoke = currentPokemon.filter((poke) => {
        return (!pokedex.some(e => e.url === poke.url))
    })
        .map((poke) => {
            return (
                <PokemonCard key={poke.name} url={poke.url} name={poke.name} />
            )
        })


    if (pokemon.length !== 0) {
        return <Container>
            <Header>
                <img src={logo} alt="Logotipo pokemon" />
                <Pokedex onClick={goToPokedex}>
                    <PokeP>
                        Pokedex
                    </PokeP>
                </Pokedex>
            </Header>

            <ContainerHome>
                {cardsPoke}
            </ContainerHome>

            <Pages>
                {pages}
            </Pages>
        </Container>;
    } else {
        return (
            <Container>
                <h1>Loading...</h1>
            </Container>
        )
    }

};

export default Home;
