import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPokemons } from "../../store/data/actions";
import { Title, SearchBar, PokemonList } from "../../components";
import { State } from "../../store/data/types";
import {
  selectFilterValue,
  selectLoadingData,
  selectPokemons,
} from "../../store/data/selectors";
import { GENERATION_ONE_URL } from "../../constants";
import { StyledDiv } from "./PokemonListPage.style";

export const PokemonListPage = () => {
  const dispatch = useDispatch();
  const notLoadedPokemons = useSelector((state: State) =>
    selectLoadingData(state)
  );
  const filter = useSelector((state: State) => selectFilterValue(state));
  const pokemonsList = useSelector((state: State) => selectPokemons(state));

  useEffect(() => {
    if (notLoadedPokemons) {
      dispatch(getAllPokemons(GENERATION_ONE_URL));
    }
  }, [notLoadedPokemons, dispatch]);

  let newPokemonsArray = undefined;
  if (pokemonsList) {
    newPokemonsArray = pokemonsList.filter((pokemon) =>
      pokemon.name.startsWith(filter)
    );
  }

  return (
    <StyledDiv>
      <Title />
      <SearchBar />
      <PokemonList pokemonArray={newPokemonsArray} />
    </StyledDiv>
  );
};
