import React, { useState,useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PokemonList from './PokemonList/PokemonList';
import SearchBar from './SearchBar/SearchBar';
import { fetchDataFromAPI } from '../../store/actions';

function Pokemon() {
    const pokemonState=useState([]);
    const dispatch = useDispatch();
    const pokemonData = useSelector(state => state.filteredPokemonsArray);
    const fetchDataConst = useCallback(() => dispatch(fetchDataFromAPI()), [dispatch]);
    useEffect(() => { 
            pokemonState[1](fetchDataConst) ;
    }, [])

    let showPokemonsCards = null;
    if(pokemonData){
        showPokemonsCards=pokemonData.map((pokemonElement,index) =>{ return <PokemonList key={index} name={pokemonElement.name} url={pokemonElement.url}/>});
    }

    return (
        <div>
            <SearchBar/>
             <div>
            {showPokemonsCards}
        </div>
        </div>
    );
}

export default Pokemon;