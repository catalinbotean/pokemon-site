import React, { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PokemonList from './PokemonList/PokemonList';
import SearchBar from './SearchBar/SearchBar';
import { fetchDataFromAPI } from '../../store/actions';
import { Link } from 'react-router-dom';
import Title from '../Title/Title';
import styled from 'styled-components';
import image from '../../backgrounds.jpg';
const StyledDiv=styled.div`
    background-image:url(${image});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    min-height:100%;
    min-width:100%;
    position:absolute;
`;

const DivParent=styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left:10%;
    margin-right:10%;
`;

const DivChild=styled.div`
  flex: 1 0 21%;
  text-align:center; 
  margin: 20px;
  height: 150px;
  max-width:21%;
  align-self:flex-start;
  border:4px solid #00ccff;
  border-radius:25%;
  background-color: #000066;
  &:hover{
      opacity:0.5;
      border:4px solid #eed603;
  }
`;
const Pokemon=()=>{

    const dispatch = useDispatch();
    const pokemonData = useSelector(state => state.pokemonsArray);
    const loading = useSelector(state => state.loadingData);
    const filter = useSelector(state => state.filterValue);

    useEffect(() => { 
            if(loading){
                dispatch({type:"GET_POKEMONS"});
                dispatch(fetchDataFromAPI());
            }
    }, [loading,dispatch])

    let showPokemonsCards = null;
    if(pokemonData){
        const newPokemonsArray = pokemonData.filter(pokemon=> pokemon.name.startsWith(filter));
        showPokemonsCards=<DivParent>{newPokemonsArray.map((pokemonElement,index) =>
                   <DivChild key={index}> <Link to={'/pokemon/'+pokemonElement.name} style={{ textDecoration: 'none' }}>
                                   <PokemonList name={pokemonElement.name} url={pokemonElement.url}/>
                              </Link></DivChild>
                    )}</DivParent>
    }


    return (
        <StyledDiv>
            <Title/>
            <SearchBar/>
                 {loading&& <div>LOADING...</div>}
                 {!loading&&showPokemonsCards}
        </StyledDiv>
    );
}

export default Pokemon;