import { useDispatch } from 'react-redux';
import { changeInputDelay } from '../../../store/actions';
import styled from 'styled-components';

const StyledDiv=styled.div`
    text-align:center;
    padding-top:80px;
    font-size:16px;
`;

const SearchBar= ()=>{
    const dispatch = useDispatch();
    const changeInp = (event) => {
        dispatch(changeInputDelay(event.target.value));
    }
    return (
        <StyledDiv>
            <input type="text" placeholder="Search..." size="50" onChange={changeInp}/>
        </StyledDiv>
    );  
}

export default SearchBar;
