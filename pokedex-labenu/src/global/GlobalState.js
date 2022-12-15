import React from "react";
import Context from "./Context";
import axios from "axios";
import { useState } from "react";

export const GlobalState = (props) => {

    const [pokemon, setPokemon] = useState([])
    const [page, setPage] = useState(0)
    const [offset, setOffset] = useState(0)
    const [pokedex, setPokedex] = useState([])

    const getPokemon = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=649`)
            .then((response) => {
                setPokemon(response.data.results)
            })
            .catch((err) => {
                alert(err)
            })
    }

    const states = {
        pokemon,
        page,
        offset,
        pokedex
    }

    const setters = {
        setPokemon,
        setPage,
        setOffset,
        setPokedex
    }

    const getters = {
        getPokemon
    }

    return (
        <Context.Provider value={{ states, setters, getters }}>
            {props.children}
        </Context.Provider>
    )
} 