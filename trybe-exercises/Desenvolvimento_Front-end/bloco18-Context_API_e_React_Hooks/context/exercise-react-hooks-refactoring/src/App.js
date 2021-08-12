// src/App.js
/* Exercício 1
Refaça o exercício 1 do dia 18.1 substituindo toda a lógica de classes para a lógica de React Hooks, deixando todos os componentes funcionais.

Nesse exercício toda a estrutura de Context API já está pronta. Utilize React Hooks - useState e useContext em substituição ao Context API para controlar os estados da aplicação.

 */
import React from 'react';
import './App.css';
import Cars from './Cars';

function App() {
  return (
    <Cars />
  );
}

export default App;
