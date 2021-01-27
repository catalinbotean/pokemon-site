import { createSelector } from "reselect";
import { State } from "./types";

export const selectPokemons = createSelector(
  ({ pokemons }: State) => pokemons,
  (pokemons) => pokemons
);

export const selectFilterValue = createSelector(
  ({ filterValue }: State) => filterValue,
  (filterValue) => filterValue
);

export const selectLoadingData = createSelector(
  ({ loadingData }: State) => loadingData,
  (loadingData) => loadingData
);

export const selectSelectedPokemon = createSelector(
  ({ selectedPokemon }: State) => selectedPokemon,
  (selectedPokemon) => selectedPokemon
);

export const selectLoadingSelectedPokemon = createSelector(
  ({ loadingSelectedPokemon }: State) => loadingSelectedPokemon,
  (loadingSelectedPokemon) => loadingSelectedPokemon
);
