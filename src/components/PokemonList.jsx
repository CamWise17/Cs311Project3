import { useState, useEffect } from "react";

function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [showTen, setShowTen] = useState(false);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((response) => response.json())
      .then((data) => setPokemon(data.results));
  }, []);

  const displayedPokemon = showTen ? pokemon.slice(0, 10) : pokemon;

  return (
    <div>
      <h2>Pokemon List</h2>

      <button onClick={() => setShowTen(!showTen)}>
        {showTen ? "Show All 20" : "Show First 10"}
      </button>

      {displayedPokemon.map((poke) => (
        <p key={poke.name}>{poke.name}</p>
      ))}
    </div>
  );
}

export default PokemonList;