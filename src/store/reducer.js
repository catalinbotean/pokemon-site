import * as actionTypes from './actions';

const initialState = {
    filterValue: '',
    pokemonsArray: [],
    filteredPokemonsArray:[]
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.GET_POKEMONS:
        return {
            ...state,
            pokemonsArray: action.pokemons,
            filteredPokemonsArray: action.pokemons
        }
        case actionTypes.INPUT:
            const newPokemonsArray = state.pokemonsArray.filter(pokemon=> pokemon.name.startsWith(action.filterValue));
            return {
                ...state,
                filterValue: action.filterValue,
                filteredPokemonsArray:newPokemonsArray
            }
        default: 
            return state;
        }
}

export default reducer;