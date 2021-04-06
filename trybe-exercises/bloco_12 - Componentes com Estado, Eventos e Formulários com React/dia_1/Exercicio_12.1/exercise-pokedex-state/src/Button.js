import React from 'react';

class Button extends React.Component {
  render() {
/*     const { type } = this.props.pokemon;
 */
    return (
      <div>
        <button onClick={this.props.nextPokemon} type="button">Próximo Pokémon</button>
        <button onClick={this.props.filterPokemon} type='button' name='Fire'>Fire</button>
        <button onClick={this.props.filterPokemon} type='button' name='Bug'>Bug</button>
        <button onClick={this.props.filterPokemon} type='button' name='Electric'>Electric</button>
      </div>
    )
  }
}

export default Button;