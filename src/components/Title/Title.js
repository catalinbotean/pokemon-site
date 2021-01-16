import React from 'react';
import styled from 'styled-components';
const StyledDiv=styled.div`
    background-color:#000066;
    font-size:36px;
    text-align:center;
    font-family:OCR A Std, monospace;
    font-weight:bold;
    padding:12px;
    position:fixed;
    width:100%;
    color:#eed603;
    z-index:1;
    border-bottom:4px solid #00ccff;
`;

const Title=()=>{
    return (
        <StyledDiv>Pokemon</StyledDiv>
    );
}

export default Title;