import React, {useEffect,useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StyledDiv=styled.div`
    border:3px solid #;
`;
function PokemonList (props) {
    
    const [imageState,setImageState]=useState([]);

    useEffect(()=>
        axios.get(props.url)
            .then(response => 
                setImageState(response.data.sprites.front_default)
             )
             .catch(error => { 
                 console.log(error)})
        ,[props.url]);
    
    return (
        <StyledDiv>
            <p>{props.name}</p>
            <img src={imageState} alt="img"/>
        </StyledDiv>);
}

export default PokemonList;