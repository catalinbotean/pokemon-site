import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { ActivitiesActions } from "../ui/types";

export interface PokemonBasicInfo {
  name: string;
}

export interface PokemonDetailedInfo extends PokemonBasicInfo {
  abilities: Abilities[];
  base_experience: number;
  sprites: {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
  };
  types: Types[];
  stats: Stats[];
}

interface Abilities {
  ability: {
    name: string;
    url: string;
  };
}

interface Types {
  type: {
    name: string;
    url: string;
  };
}

interface Stats {
  stat: {
    name: string;
    url: string;
  };
  base_stat: string;
}

export interface Response {
  results: PokemonBasicInfo[];
}

export interface ResponseSelectPokemon {
  data: PokemonDetailedInfo;
}

export interface State {
  pokemons: PokemonBasicInfo[];
  filterValue: string;
  loadingData: boolean;
  selectedPokemon: PokemonDetailedInfo | undefined;
  loadingSelectedPokemon: boolean;
}

export enum ActionTypes {
  GET_ALL_POKEMONS = "GET_ALL_POKEMONS",
  GET_POKEMONS_SUCCESS = "GET_POKEMONS_SUCCESS",
  INPUT = "INPUT",
  GET_SELECTED_POKEMON = "GET_SELECTED_POKEMON",
}

export interface GetAllPokemonsAction extends Action {
  type: ActionTypes.GET_ALL_POKEMONS;
}

export interface GetPokemonsSuccess extends Action {
  type: ActionTypes.GET_POKEMONS_SUCCESS;
  payload: Response;
}

export interface GetInput extends Action {
  type: ActionTypes.INPUT;
  filterValue: string;
}

export interface GetSelectedPokemon extends Action {
  type: ActionTypes.GET_SELECTED_POKEMON;
  payload: ResponseSelectPokemon;
}

export type PokemonsAction =
  | GetAllPokemonsAction
  | GetPokemonsSuccess
  | GetInput
  | GetSelectedPokemon;

export type Actions = PokemonsAction | ActivitiesActions;

export type Thunk = ThunkAction<Promise<void>, State, void, Actions>;
