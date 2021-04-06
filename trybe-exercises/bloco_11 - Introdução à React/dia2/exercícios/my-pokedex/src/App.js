import './App.css';
import PokemonList from './PokemonList'
import React from 'react';
import pokemons from './data';



function App() {
  return (
    <div className='App'>
      <PokemonList pokemons={pokemons}/>
    </div>
  );
}

export default App;
