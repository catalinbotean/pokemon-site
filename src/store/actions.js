import axios from 'axios';

export const GET_POKEMONS = "GET_POKEMONS";
export const INPUT = "INPUT";
export const FILTER = "FILTER";

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

export const filterArray = () => {
    return{
        type:FILTER
    }
}