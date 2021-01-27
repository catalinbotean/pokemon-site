import { ActionTypes, Thunk, Response, GetPokemonsSuccess, GetInput, GetSelectedPokemon, ResponseSelectPokemon } from "./types";
import { ActionCreator } from "redux";
import { v4 as uuid } from "uuid";
import { beginActivity, setError, endActivity } from "../ui/actions";
import axios from "axios";

const getAllPokemonsAction: ActionCreator<GetPokemonsSuccess> = ({
  results,
}: Response) => {
  return {
    type: ActionTypes.GET_POKEMONS_SUCCESS,
    payload: {
      results,
    },
  };
};

export const getAllPokemons = (url: string): Thunk => async (dispatch) => {
  const activityId = uuid();

  try {
    await dispatch(
      beginActivity({
        type: ActionTypes.GET_ALL_POKEMONS,
        uuid: activityId,
      })
    );
    axios.get("https://pokeapi.co/api/v2/generation/1/").then((response) => {
      dispatch(
        getAllPokemonsAction({ results: response.data.pokemon_species })
      );
    });
  } catch (err) {
    await dispatch(
      setError({
        type: ActionTypes.GET_ALL_POKEMONS,
        message: err.message,
        uuid: activityId,
      })
    );
  } finally {
    await dispatch(endActivity({ uuid: activityId }));
  }
};

export const changeInputDelay = (value:string): Thunk => async (dispatch) => {
      setTimeout(()=>dispatch(changeInput(value))
      ,300);
    
}

export const changeInput: ActionCreator<GetInput> = (value:string) =>{
  return{
      type:ActionTypes.INPUT,
      filterValue:value
  }
}

const getSelectedPokemonAction: ActionCreator<GetSelectedPokemon> = ({
  data,
}: ResponseSelectPokemon) => {
  return {
    type: ActionTypes.GET_SELECTED_POKEMON,
    payload: {
      data,
    },
  };
};

export const getSelectedPokemon = (url: string): Thunk => async (dispatch) => {
  const activityId = uuid();

  try {
    await dispatch(
      beginActivity({
        type: ActionTypes.GET_SELECTED_POKEMON,
        uuid: activityId,
      })
    );
    axios.get(url).then((response) => {
      dispatch(
        getSelectedPokemonAction({ data: response.data })
      );
    });
  } catch (err) {
    await dispatch(
      setError({
        type: ActionTypes.GET_SELECTED_POKEMON,
        message: err.message,
        uuid: activityId,
      })
    );
  } finally {
    await dispatch(endActivity({ uuid: activityId }));
  }
};