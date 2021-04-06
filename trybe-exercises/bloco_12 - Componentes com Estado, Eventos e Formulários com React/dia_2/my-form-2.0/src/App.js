import './App.css';
import Cargo from './components/Cargo';
import CPF from './components/CPF';
import DescriçãoDoCargo from './components/DescriçãoDoCargo';
import Email from './components/Email';
import Endereço from './components/Endereço';
import Moradia from './components/Moradia';
import Nome from './components/Nome';
import ResumoDoCurrículo from './components/ResumoDoCurrículo';

function App() {
  return (
    <form>

      <header>
        <h1>Formulário Para Concorrer a Vagas Como Dev</h1>
      </header>

      <fieldset>
      <legend>Dados Pessoais</legend>
        <Nome />
        <Email />
        <CPF />
        <Endereço />
        <Moradia />
      </fieldset>

      <fieldset>
      <legend>Dados do seu último emprego</legend>
        <ResumoDoCurrículo/>
        <Cargo/>
        <DescriçãoDoCargo />
      </fieldset>

    </form>
  );
}

export default App;
