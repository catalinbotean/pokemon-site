import { PokemonDetailPage, PokemonListPage } from "./pages";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={PokemonListPage} />
        <Route path="/pokemon/:name" exact component={PokemonDetailPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
