import React from 'react';

class Nome extends React.Component {

  constructor() {
    super()
    this.upperCase = this.upperCase.bind(this)

    this.state = {

    }
  }

  upperCase({ target }) {
    console.log(target);
    return target.value.toUpperCase()
  }

  render() {
    return (
      <div>
        <label htmlFor="name">Nome:</label>
        <input onChange={this.upperCase} type="text" id="name" name="name" placeholder="Digite seu nome" maxlength="40" required autofocus />
      </div>
    )
  }
}

export default Nome