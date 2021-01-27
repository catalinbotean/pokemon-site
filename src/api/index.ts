import axios from "axios";

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

export interface ResponseImage{
    sprites:{
      front_default:string;
    }
}

export async function getPokemonImage(url: string): Promise<ResponseImage> {
  return new Promise((resolve) => {
    axios
      .get(url)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
}
