import React from 'react';

class Moradia extends React.Component {
  render() {
    return (
      <div id="div-box">
        <p>Tipo de Moradia:</p>
        <input type="radio" name="dwelling" id="home" />
        <label htmlFor="home">Casa</label>
        <input type="radio" name="dwelling" id="apartment" />
        <label htmlFor="apartment">Apartamento</label>
      </div>
    )
  }
}

export default Moradia