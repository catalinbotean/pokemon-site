import * as actionTypes from './actions';

const initialState = {
    filterValue: '',
    pokemonsArray: [],
    filteredPokemonsArray:[],
    loadingData:true,
    selectedPokemon:null,
    loadingSelectedPokemon:true
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.GET_POKEMONS:
        return {
            ...state,
            loadingData:true,
            pokemonsArray: [],
            filteredPokemonsArray: []
        }
        case actionTypes.GET_POKEMONS_SUCCESS:
        return {
            ...state,
            loadingData:false,
            loadingSelectedPokemon:true,
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
        case actionTypes.GET_SELECTED_POKEMON:
            return{
                ...state,
                selectedPokemon:action.data,
                loadingSelectedPokemon:false,
                loadingData:true
            }
        default: 
            return state;
        }
}

export default reducer;