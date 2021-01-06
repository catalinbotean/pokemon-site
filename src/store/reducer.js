import * as actionTypes from './actions';

const initialState = {
    filterValue: '',
    pokemonsArray: []
}

const reducer = (state = initialState, action) => {
    if (action.type === actionTypes.GET_POKEMONS) {
        return {
            ...state,
            pokemonsArray: action.pokemons
        }
    }
    else
        if (action.type === actionTypes.INPUT) {
            return {
                ...state,
                filterValue: action.filterValue
            }
        }
    return state;
}

export default reducer;