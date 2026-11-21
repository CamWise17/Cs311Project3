import "./App.css";
import PokemonList from "./components/PokemonList";
import SearchPokemon from "./components/SearchPokemon";

function App() {
  return (
    <div>
      <h1>Pokemon App</h1>

      <SearchPokemon />

      <PokemonList />
    </div>
  );
}

export default App;