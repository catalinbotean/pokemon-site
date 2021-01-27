import React, { useEffect, useState } from "react";
import { PokemonBasicInfo } from "../../api";
import { useSelector } from "react-redux";
import { State } from "../../store/data/types";
import { selectLoadingData } from "../../store/data/selectors";
import { StyledDiv } from "./PokemonCard.style";
import { getPokemonImage } from "../../api";
import { BASE_URL } from "../../constants";

interface Props {
  pokemon: PokemonBasicInfo;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const [imageState, setImageState] = useState("");
  const [loadingImage, setLoadingImage] = useState(true);
  const loadPokemonName = useSelector((state: State) =>
    selectLoadingData(state)
  );

  useEffect(() => {
    async function fetchImage() {
      const image = getPokemonImage(BASE_URL + pokemon.name);
      setImageState((await image).sprites.front_default);
    }
    if (!loadPokemonName) {
      setLoadingImage(true);
      fetchImage();
      setLoadingImage(false);
    }
    return () => {
      setLoadingImage(false);
    };
  }, [pokemon.name, setLoadingImage, loadPokemonName, setImageState]);

  return (
    <StyledDiv>
      {loadingImage && <div>Loading Image ...</div>}
      {!loadingImage && (
        <div>
          <p>{pokemon.name}</p>
          <img src={imageState} alt="img" />
        </div>
      )}
    </StyledDiv>
  );
};
