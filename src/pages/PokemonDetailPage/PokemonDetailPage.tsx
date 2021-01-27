import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSelectedPokemon } from "../../store/data/actions";
import { Title } from "../../components";
import { State } from "../../store/data/types";
import { PokemonDetailedCard } from "../../components";
import {
  selectLoadingSelectedPokemon,
  selectSelectedPokemon,
} from "../../store/data/selectors";
import { BASE_URL } from "../../constants";
import { StyleDiv } from "./PokemonDetailPage.style";

interface Props {
  match: {
    params: {
      name: string;
    };
  };
}

export const PokemonDetailPage = ({ match }: Props) => {
  const dispatch = useDispatch();
  const loadingSelectedPokemon = useSelector((state: State) =>
    selectLoadingSelectedPokemon(state)
  );
  const pokemonData = useSelector((state: State) =>
    selectSelectedPokemon(state)
  );
  useEffect(() => {
    if (loadingSelectedPokemon) {
      dispatch(getSelectedPokemon(BASE_URL + match.params.name));
    }
  }, [match.params.name, pokemonData, dispatch, loadingSelectedPokemon]);

  return (
    <div>
      <Title />
      <StyleDiv>
        <PokemonDetailedCard selectedPokemon={pokemonData} />
      </StyleDiv>
    </div>
  );
};
