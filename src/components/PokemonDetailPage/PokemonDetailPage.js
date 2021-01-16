import React ,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Title from '../Title/Title';
import styled from 'styled-components';
import image from '../../backgrounds.jpg';
import { Link } from 'react-router-dom';

const StyleDiv=styled.div`
    background-image:url(${image});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    min-height:100%;
    min-width:100%;
    position:absolute;

    ul li{
        text-align:left;
        margin-left:42%;
    }
`;

const NameDiv=styled.div`
    padding-top:80px;
    color:#000066;
    font-size:36px;
    text-align:center;
    text-transform:uppercase;
    background-color:#00ccff;
    border-radius:25%;
    width:30%;
    margin-left:35%;
`;

const DataDiv=styled.div`
    background-color:#ffffff;
    text-align:center;
    width:40%;
    border:4px solid #00ccff;
    border-radius:25%;
    margin-top:3%;
    margin-left:30%;
    margin-right:30%;
    overflow:hidden;
`;

const LabelDiv=styled.div`
    color:white;
    background-color:#000066;
`;

const TypeBadge=styled.div`
    border-radius:50px 50px 50px 50px;
    margin-left:40%;
    width:20%;
    padding-top:3%;
    padding-bottom:3%;
    margin-top:1%;
    margin-bottom:1%;
    ${(props)=>(props.type==='water'&&`color:white; background-color:#0000ff;`)||
                (props.type==='rock'&&`color:white;background-color:#663300`)||
                (props.type==='psychic'&&`color:white;background-color:#990033`)||
                (props.type==='poison'&&`color:white;background-color:#660066`)||
                (props.type==='normal'&&`color:black;background-color:#ffffcc`)||
                (props.type==='ice'&&`color:black;background-color:#ccffff`)||
                (props.type==='ground'&&`color:black;background-color:#99cc00`)||
                (props.type==='grass'&&`color:black;background-color:#66ff33`)||
                (props.type==='ghost'&&`color:white;background-color:black`)||
                (props.type==='flying'&&`color:black;background-color:#00ccff`)||
                (props.type==='fire'&&`color:white;background-color:#ff0000`)||
                (props.type==='fighting'&&`color:white;background-color:#ccccff`)||
                (props.type==='dragon'&&`color:white;background-color:#ff3300`)||
                (props.type==='bug'&&`color:white;background-color:#ffcc99`)
                }
`;

const ButtonStyled=styled.div`
    background:#00ccff;
    color:black;
    border:none;
    border-radius:50px 50px 50px 50px;
    padding:3%;
    margin:1%;
    width:25%;
    margin-left:35%;
    &:hover{
        color:white;
        background-color:#000066;
    }
`;

const PokemonDetail=(props)=> {

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
     dataP = (<StyleDiv>
                     <NameDiv>{pokemonData.data.name}</NameDiv>
                     <DataDiv>
                            <LabelDiv>Base experience:</LabelDiv>
                            <div>{pokemonData.data.base_experience}</div>
                            <img src={pokemonData.data.sprites.back_default} alt="imagine"/>
                            <img src={pokemonData.data.sprites.back_shiny} alt="imagine"/>
                            <img src={pokemonData.data.sprites.front_default} alt="imagine"/>
                            <img src={pokemonData.data.sprites.front_shiny}  alt="imagine"/>
                            <div> 
                                    <LabelDiv>Abilities:</LabelDiv>
                                    {pokemonData.data.abilities.map((el,ind)=>{return <div key={ind}>{el.ability.name}</div>})} 
                            </div>
                            <div> 
                                    <LabelDiv>Types:</LabelDiv>
                                    {pokemonData.data.types.map((el,ind)=>{return <TypeBadge key={ind} type={el.type.name}>{el.type.name}</TypeBadge>})} 
                            </div>
                            <div> 
                                    <LabelDiv>Stats:</LabelDiv>
                                    <ul style={{listStyleType:'none'}}>
                                        {pokemonData.data.stats.map((el,ind)=>{return <li key={ind}>{el.stat.name}:{el.base_stat}</li>})} 
                                    </ul>
                            </div>
                            <Link to={'/'} style={{ textDecoration: 'none' }}><ButtonStyled>Inapoi</ButtonStyled></Link>
                     </DataDiv>
                </StyleDiv>);
    }
    
    return (
        <div>
            <Title/>
            {!loading&&dataP}
        </div>
    );
}

export default PokemonDetail;