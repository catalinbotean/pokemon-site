import axios from 'axios';

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMONS_SUCCESS = "GET_POKEMONS_SUCCESS";
export const INPUT = "INPUT";
export const GET_SELECTED_POKEMON = "GET_SELECTED_POKEMON";

export const storeDataIntoPokemonsArray = (pokemons) => {
    return {
        type: GET_POKEMONS_SUCCESS,
        pokemons: Object.assign([], pokemons.pokemon_species)
    };
}

export const fetchDataFromAPI = () => {
    return function (dispatch) {
        axios.get('https://pokeapi.co/api/v2/generation/1/')
            .then((response) => dispatch(storeDataIntoPokemonsArray(response.data))
            )
            .catch(error => {
                console.log(error)
            }
            )
    }
}

export const changeInputDelay = (value) =>{
    return function(dispatch){
        const timer=setTimeout(()=>dispatch(changeInput(value))
        ,300);
        return () => {
            clearTimeout(timer);
          };
    }
}

export const changeInput = (value) =>{
    return{
        type:INPUT,
        filterValue:value
    }
}
