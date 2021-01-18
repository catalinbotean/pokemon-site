import * as actionTypes from './actions';

const initialState = {
    filterValue: '',
    pokemonsArray: [],
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
            pokemonsArray: []
        }
        case actionTypes.GET_POKEMONS_SUCCESS:
        return {
            ...state,
            loadingData:false,
            loadingSelectedPokemon:true,
            pokemonsArray: action.pokemons
        }
        case actionTypes.INPUT:
            return {
                ...state,
                filterValue: action.filterValue
            }
        case actionTypes.GET_SELECTED_POKEMON:
            return{
                ...state,
                selectedPokemon:action.data,
                loadingSelectedPokemon:false,
                loadingData:true,
                filterValue:''
            }
        default: 
            return state;
        }
}

export default reducer;