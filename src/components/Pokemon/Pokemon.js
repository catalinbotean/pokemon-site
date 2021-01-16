import React, { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PokemonList from './PokemonList/PokemonList';
import SearchBar from './SearchBar/SearchBar';
import { fetchDataFromAPI } from '../../store/actions';
import { Link } from 'react-router-dom';
 
function Pokemon() {

    const dispatch = useDispatch();
    const pokemonData = useSelector(state => state.filteredPokemonsArray);
    const loading = useSelector(state => state.loadingData);

    useEffect(() => { 
            if(loading){
                dispatch({type:"GET_POKEMONS"});
                dispatch(fetchDataFromAPI());
            }
    }, [loading,dispatch])

    let showPokemonsCards = null;
    if(pokemonData){
        showPokemonsCards=pokemonData.map((pokemonElement,index) =>
                    { return <Link to={'/pokemon/'+pokemonElement.name}  key={index}>
                                    <PokemonList name={pokemonElement.name} url={pokemonElement.url}/>
                              </Link>
                    });
    }

    return (
        <div>
            <SearchBar/>
             <div>
                 {loading&& <div>LOADING...</div>}
                 {!loading&&showPokemonsCards}
        </div>
        </div>
    );
}

export default Pokemon;