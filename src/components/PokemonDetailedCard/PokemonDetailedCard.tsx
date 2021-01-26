import React from "react";
import { Link } from "react-router-dom";
import { PokemonDetailedInfo } from "../../api";
import {
  StyleDiv,
  NameDiv,
  DataDiv,
  LabelDiv,
  TypeBadge,
  ButtonStyled,
} from "./PokemonDetailedCard.style";
interface Props {
  selectedPokemon: PokemonDetailedInfo | undefined;
}

export const PokemonDetailedCard = ({ selectedPokemon }: Props) => {
  let dataP = null;
  if (selectedPokemon) {
    dataP = (
      <StyleDiv>
        <NameDiv>{selectedPokemon.name}</NameDiv>
        <DataDiv>
          <LabelDiv>Base experience:</LabelDiv>
          <div>{selectedPokemon.base_experience}</div>
          <img src={selectedPokemon.sprites.back_default} alt="imagine" />
          <img src={selectedPokemon.sprites.back_shiny} alt="imagine" />
          <img src={selectedPokemon.sprites.front_default} alt="imagine" />
          <img src={selectedPokemon.sprites.front_shiny} alt="imagine" />
          <div>
            <LabelDiv>Abilities:</LabelDiv>
            {selectedPokemon.abilities.map((el, ind) => {
              return <div key={ind}>{el.ability.name}</div>;
            })}
          </div>
          <div>
            <LabelDiv>Types:</LabelDiv>
            {selectedPokemon.types.map((el, ind) => {
              return (
                <TypeBadge key={ind} type={el.type.name}>
                  {el.type.name}
                </TypeBadge>
              );
            })}
          </div>
          <div>
            <LabelDiv>Stats:</LabelDiv>
            <ul style={{ listStyleType: "none" }}>
              {selectedPokemon.stats.map((el, ind) => {
                return (
                  <li key={ind}>
                    {el.stat.name}:{el.base_stat}
                  </li>
                );
              })}
            </ul>
          </div>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <ButtonStyled>Inapoi</ButtonStyled>
          </Link>
        </DataDiv>
      </StyleDiv>
    );
  }

  return <div>{dataP}</div>;
};
