import { Actions, ActionTypes } from "./types";

import initialState from "./initialState";

export const reducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.GET_ALL_POKEMONS:
      return {
        ...state,
        loadingData: true,
        pokemons: [],
      };
    case ActionTypes.GET_POKEMONS_SUCCESS:
      const { results } = action.payload;
      return {
        ...state,
        loadingData: false,
        loadingSelectedPokemon: true,
        pokemons: results,
      };
    case ActionTypes.INPUT:
      return {
        ...state,
        filterValue: action.filterValue,
      };
    case ActionTypes.GET_SELECTED_POKEMON:
      console.log(action.data);
      return {
        ...state,
        selectedPokemon: action.data,
        loadingSelectedPokemon: false,
        loadingData: true,
        filterValue: "",
      };
    default:
      return state;
  }
};
