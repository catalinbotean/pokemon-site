import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Title } from "../../components";
import { State } from "../../store/data/types";
import { PokemonDetailedCard } from "../../components";
import {
  selectLoadingSelectedPokemon,
  selectSelectedPokemon,
} from "../../store/data/selectors";

interface Props {
  match: {
    params: {
      name: string;
    };
  };
}

export const PokemonDetailPage = ({ match }: Props) => {
  const dispatch = useDispatch();
  const loading = useSelector((state: State) =>
    selectLoadingSelectedPokemon(state)
  );
  const pokemonData = useSelector((state: State) =>
    selectSelectedPokemon(state)
  );
  useEffect(() => {
    if (loading) {
      axios
        .get("https://pokeapi.co/api/v2/pokemon/" + match.params.name)
        .then((response) => {
          dispatch({ type: "GET_SELECTED_POKEMON", data: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [match.params.name, pokemonData, dispatch, loading]);

  return (
    <div>
      <Title />
      <PokemonDetailedCard selectedPokemon={pokemonData} />
    </div>
  );
};
