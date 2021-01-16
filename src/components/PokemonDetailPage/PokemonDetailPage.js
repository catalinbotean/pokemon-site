import React ,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

function PokemonDetail(props) {

    const dispatch = useDispatch();
    const pokemonData = useSelector(state => state.selectedPokemon);
    const loading = useSelector(state => state.loadingSelectedPokemon);
    useEffect(()=>{
        if(loading){
            axios.get('https://pokeapi.co/api/v2/pokemon/'+props.match.params.name)
                .then(response =>{
                        dispatch({type:"GET_SELECTED_POKEMON", data:response})
                    }
                )
                .catch(error => { 
                    console.log(error)
                })}
            }
        ,[props,pokemonData,dispatch,loading]);
    
    let dataP=null;
    if(pokemonData){
     dataP = (<div>
                     <div>{pokemonData.data.name}</div>
                     <div>Base experience: {pokemonData.data.base_experience}</div>
                     <img src={pokemonData.data.sprites.back_default} alt="imagine"/>
                     <img src={pokemonData.data.sprites.back_shiny} alt="imagine"/>
                     <img src={pokemonData.data.sprites.front_default} alt="imagine"/>
                     <img src={pokemonData.data.sprites.front_shiny}  alt="imagine"/>
                     <div> <p>Abilities:</p>
                            {pokemonData.data.abilities.map((el,ind)=>{return <div key={ind}>{el.ability.name}</div>})} 
                     </div>
                      <div> <p>Types:</p>
                            {pokemonData.data.types.map((el,ind)=>{return <div key={ind}>{el.type.name}</div>})} 
                     </div>
                     <div> <p>Stats:</p>
                            {pokemonData.data.stats.map((el,ind)=>{return <div key={ind}>{el.stat.name}:{el.base_stat}</div>})} 
                     </div>
                </div>);
    }
    return (
        <div>
            {!loading&&dataP}
        </div>
    );
}

export default PokemonDetail;