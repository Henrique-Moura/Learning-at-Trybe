import React from 'react';

class Cargo extends React.Component {
  render() {
    return (
      <div id="div-box">
        <label htmlFor="office">Cargo:</label>
        <input type="text" id="cargo" maxlength="40" placeholder="Digite seu cargo" required />
      </div>
    )
  }
}

export default Cargo