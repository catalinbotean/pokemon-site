import { useDispatch } from 'react-redux';
import { changeInputDelay } from '../../../store/actions';

function SearchBar () {
    const dispatch = useDispatch();

    const changeInp = (event) => {
        dispatch(changeInputDelay(event.target.value));
    }
    return (
        <div>
            <input type="text"  onChange={changeInp}/>
        </div>
    );  
}

export default SearchBar;
