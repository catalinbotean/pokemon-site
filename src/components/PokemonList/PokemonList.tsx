import React from "react";
import { PokemonBasicInfo } from "../../api";
import { Link } from "react-router-dom";
import { PokemonCard } from "../PokemonCard";
import { DivParent, DivChild } from "./PokemonList.style";

interface Props {
  pokemonArray: PokemonBasicInfo[] | undefined;
}

export const PokemonList = ({ pokemonArray }: Props) => {
  return (
    <div>
      {pokemonArray ? (
        <DivParent>
          {pokemonArray.map((pokemonCard, index) => (
            <DivChild key={index}>
              <Link
                to={"/pokemon/" + pokemonCard.name}
                style={{ textDecoration: "none" }}
              >
                <PokemonCard pokemon={{ name: pokemonCard.name }} />
              </Link>
            </DivChild>
          ))}
        </DivParent>
      ) : null}
    </div>
  );
};
