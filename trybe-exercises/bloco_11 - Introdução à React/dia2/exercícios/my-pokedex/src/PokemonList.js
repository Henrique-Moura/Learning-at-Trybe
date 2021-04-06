import React from 'react';
import PokemonCards from './PokemonCards';
import './App.css';

class PokemonList extends React.Component {
  render (){
    return(
      <div className='poke-list'>
        {this.props.pokemons.map((pokemon) => <PokemonCards key={pokemon.id}  pokemon={pokemon}/>)}
      </div>
    )
  }
}

export default PokemonList;