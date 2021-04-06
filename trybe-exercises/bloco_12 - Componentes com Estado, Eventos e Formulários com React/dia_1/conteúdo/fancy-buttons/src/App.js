import './App.css';
import React from 'react'

/* Para fixar
1 - Crie uma aplicação React com npx create-react-app fancy-buttons . Altere o componente App.js para que seja um componente de classe e contenha um botão associado a um evento que imprime um texto qualquer via console.log() . Não precisa se preocupar com a sintaxe correta para funções de eventos por enquanto!
2 - Faça com que sua aplicação exiba três botões lado a lado com textos diferentes. Cada botão clicado deve acionar um evento diferente, cada um escrevendo algo diferente no console do navegador via console.log() .
 */



class App extends React.Component {
  constructor() {
    super()
    this.clickButton = this.clickButton.bind(this)
    this.clickButton2 = this.clickButton.bind(this)
    this.clickButton3 = this.clickButton.bind(this)

    this.state = {
    numeroDeClique1: 0,
    numeroDeClique2: 0,
    numeroDeClique3: 0
  }
  }

  clickButton() {
    this.setState((estadoAnterior, _) => ({
      numeroDeClique: estadoAnterior.numeroDeClique + 1
    }))
  }

  clickButton2() {
    console.log(2);
  }

  clickButton3() {
    console.log(3);
  }

  render () {
    return (
      <div className="App">
        <button onClick={this.clickButton}> { this.state.numeroDeClique }</button>
        <button onClick={this.clickButton2}></button>
        <button onClick={this.clickButton3}></button>
      </div>

    );
  }
}

export default App;
