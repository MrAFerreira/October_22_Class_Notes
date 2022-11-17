import { useState, useEffect } from 'react';
import axios from 'axios';

function Pokedex() {
  const [name, setName] = useState('');
  const [getPokemon, setGetPokemon] = useState('');
  const [pokemon, setPokemon] = useState(null);

  const handleName = (e) => setName(e.target.value);

  //We store it in a different state, to use useEffect
  useEffect(() => {
    //This only runs when getPokemon is updated
    //and that only happens when the user presses the button
    getFromApi();
  }, [getPokemon]);

  const getFromApi = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${getPokemon}`);
      setPokemon(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setGetPokemon(name);
  };

  return (
    <div>
      <h1>Search Pokemon</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Pokemon:</label>
        <input type="text" onChange={handleName} />
        <button type="submit">Search</button>
      </form>

      {pokemon && (
        <div>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt="pokemon" />
        </div>
      )}
    </div>
  );
}

export default Pokedex;
