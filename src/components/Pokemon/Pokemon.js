import React, { useState,useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDataFromAPI } from '../../store/actions';

function Pokemon() {
    const pokemonState=useState([]);
    const pokemonData = useSelector(state => state.pokemonsArray);
    const dispatch = useDispatch();
    const fetchDataConst = useCallback(() => dispatch(fetchDataFromAPI()), [dispatch]);

    useEffect(() => { 
        return pokemonState[1](fetchDataConst) ;
    }, [pokemonState,fetchDataConst])
    
    return (
        <div>
            <div>Pokemon Data: <ul>{pokemonData.map(pokemon =>{ return <li>{pokemon.name}</li>})}</ul></div>
        </div>
    );
}

export default Pokemon;