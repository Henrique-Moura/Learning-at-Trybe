import React from 'react';
import './App.css';


class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;

    return (
    <div className='poke-cards'>
      <div>
        <h1>{name}</h1>
        <h1>{type}</h1>
        <h1>{`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</h1>
      </div>
        <img src={image}></img>
    </div>
    )
  }
}

export default Pokemon