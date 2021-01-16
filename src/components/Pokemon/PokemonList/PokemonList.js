import React, {useEffect,useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const StyledDiv=styled.div`
    text-transform:uppercase;
    color:#00ccff;
    &:hover{
       color:#eed603;
     }
`;

const PokemonList=(props)=>{
    
    const setImageState=useState([]);
    const loading = useState(true);
    const load = useSelector(state => state.loadingData);

    useEffect(()=>{
        if(!load){
        axios.get('https://pokeapi.co/api/v2/pokemon/'+props.name)
            .then(response =>{
                setImageState[1](response.data.sprites.front_default)
            }
             )
             .catch(error => { 
                 console.log(error)})}
        return ()=>{loading[1](false);}
       }
        ,[props.name,loading,load,setImageState]);
    
    return (
        <StyledDiv>
            <p>{props.name}</p>
            {loading[0] && <div>Loading Image ...</div>}
            {!loading[0] && <img src={setImageState[0]} alt="img"/>}
        </StyledDiv>);
}

export default PokemonList;