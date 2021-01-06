import axios from 'axios';

export const GET_POKEMONS = "GET_POKEMONS";
export const INPUT = "INPUT";

export const storeDataIntoPokemonsArray = (pokemons) => {
    return {
        type: GET_POKEMONS,
        pokemons: Object.assign([], pokemons.results)
    };
}

export const fetchDataFromAPI = () => {
    return function (dispatch) {
        axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then((response) => dispatch(storeDataIntoPokemonsArray(response.data))
            )
            .catch(error => {
                console.log(error)
            }
            )
    }
}
