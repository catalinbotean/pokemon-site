import React, { useState,useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDataFromAPI } from '../../store/actions';
import PokemonList from './PokemonList/PokemonList';


function Pokemon() {
    const pokemonState=useState([]);
    const pokemonData = useSelector(state => state.pokemonsArray);
    const dispatch = useDispatch();
    const fetchDataConst = useCallback(() => dispatch(fetchDataFromAPI()), [dispatch]);

    useEffect(() => { 
            return pokemonState[1](fetchDataConst) ;
    }, [])

    let showPokemonsCards = null;
    if(pokemonData){
        showPokemonsCards=pokemonData.map((pokemonElement,index) =>{ return <PokemonList key={index} name={pokemonElement.name} url={pokemonElement.url}/>});
    }

    return (
        <div>
            {showPokemonsCards}
        </div>
    );
}

export default Pokemon;