import React from 'react';

class Email extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="email">E-mail:</label>
        <input type="email" name="email" id="email" placeholder="Digite seu e-mail" maxlength="50" required />
      </div>
    )
  }
}

export default Email