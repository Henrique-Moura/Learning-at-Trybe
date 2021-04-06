import React from 'react';

class CPF extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="cpf">CPF:</label>
        <input type="text" name="cpf" id="cpf" maxlength="11" pattern="[0-9]{3}[0-9]{3}[0-9]{3}[0-9]{2}" placeholder="Ex: 12345678900" required />
        <span>Apenas números</span>
      </div>
    )
  }
}

export default CPF