import React, { useState } from "react";
import PokemonContext from "./Context";
import { useRequestData } from '../hooks/requestData/requestData'

export const GlobalState = (props) => {

    const [pokemonList, isLoadingList, errorList] = useRequestData('?offset=0&limit=20')
    const [page, setPage] = useState(1) //Acho que não precisa, pq tem o Router
    const [offset, setOffset] = useState()
    const [pokedex, setPokedex] = useState([])
    
    const states = {
        pokemonList,
        isLoadingList,
        errorList,
        page,
        offset,
        pokedex
    }

    const setters = {
        setPage,
        setOffset,
        setPokedex
    }

    const values = {
        states,
        setters
    }

    return (
        <PokemonContext.Provider value={ values }>
            {props.children}
        </PokemonContext.Provider>
    )
} 