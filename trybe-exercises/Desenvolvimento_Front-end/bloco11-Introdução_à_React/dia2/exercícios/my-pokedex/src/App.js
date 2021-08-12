import React from 'react';
import './App.css';
import Pokedex from './Pokedex';
import pokemons from './data';
/* Todo o css fou retirado do gabarito */
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Pokedex</h1>
        <Pokedex pokemons={ pokemons }/>
      </div>
    );
  }
}

export default App;
