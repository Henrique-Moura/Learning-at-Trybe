import logo from './logo.svg';
import './App.css';

const tarefas = ['Casa' , 'Trybe', 'React'];


function App() {
  return (
    <ul>{ tarefas.map(tarefa => <li>{ tarefa }</li>) }</ul>
  );
}

export default App;
