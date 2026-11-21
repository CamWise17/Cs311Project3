import { useState } from "react";

function SearchPokemon() {
  const [searchName, setSearchName] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [message, setMessage] = useState("");

  const searchPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchName.toLowerCase()}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Pokemon not found");
        }
        return response.json();
      })
      .then((data) => {
        setPokemon(data);
        setMessage("");
      })
      .catch(() => {
        setPokemon(null);
        setMessage("Pokemon not found");
      });
  };

  return (
    <div>
      <h2>Search Pokemon</h2>

      <input
        type="text"
        placeholder="Enter Pokemon name"
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
      />

      <button onClick={searchPokemon}>Search</button>

      {message && <p>{message}</p>}

      {pokemon && (
        <div>
          <h3>{pokemon.name}</h3>
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
        </div>
      )}
    </div>
  );
}

export default SearchPokemon;