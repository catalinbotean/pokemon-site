import { useSelector, useDispatch } from 'react-redux';
import { changeInputDelay } from '../../../store/actions';

function SearchBar () {
    const searchValue = useSelector(state => state.filterValue)
    const dispatch = useDispatch();

    const changeInp = (event) => {
        dispatch(changeInputDelay(event.target.value));
    }
    return (
        <div>
            <input type="text"  onChange={changeInp}/>
            <div>{searchValue}</div>
        </div>
    );   
}

export default SearchBar;
