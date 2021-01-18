import Pokemon from './components/Pokemon/Pokemon';
import PokemonDetail from './components/PokemonDetailPage/PokemonDetailPage';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
          <Route path='/' exact component={Pokemon}/>
          <Route path='/pokemon/:name' exact component={PokemonDetail}/>
    </BrowserRouter>
  );
}

export default App;
