import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div className="pokemon">
        <h1>{ pokemon.name }</h1>
        <h3>{ pokemon.type }</h3>
        <img src={pokemon.image} alt={ pokemon.name }/>
        <p>{ pokemon.averageWeight.value}{pokemon.averageWeight.measurementUnit} </p>
      </div>
    )
  }
}

export default Pokemon;
