import React from 'react';
import Pokemon from './Pokemon';
import Button from './Button';

class Pokedex extends React.Component {
    constructor(props) {
      super(props);
      this.nextPokemon = this.nextPokemon.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.filterPokemon = this.filterPokemon.bind(this);
      this.state = {
        pokemons: props.pokemons,
        type: '',
        position: 0,
      };
    }

    nextPokemon(pokemons) {
      if (this.state.position >= pokemons.length - 1) {
        this.setState({
          position: 0,
        })
      } else {
        this.setState((estadoAnterior) => ({position: estadoAnterior.position + 1}))
      }
      console.log(this.state.position);
    }

    handleChange(event) {
      const { name } = event.target;
      this.setState({
        type: name,
      })
    }

    filterPokemon() {
      const { pokemons } = this.state;
      return pokemons.filter(pokemon => pokemon.type.includes(this.state.type))
    }

    render() {
      const { pokemons, position } = this.state;
      const filteredPokemons = this.filterPokemon();
      const pokemon = filteredPokemons[position];
        return (
            <div className="pokedex">
                <Pokemon pokemon={ pokemon } />
                <Button filterPokemon={this.handleChange} nextPokemon={this.nextPokemon} />
            </div>
        );
    }
}



export default Pokedex;
