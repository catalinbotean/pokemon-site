import { State } from "./types";

const initialState: State = {
  pokemons: [],
  filterValue: "",
  loadingData: true,
  selectedPokemon: undefined,
  loadingSelectedPokemon: true,
};

export default initialState;
