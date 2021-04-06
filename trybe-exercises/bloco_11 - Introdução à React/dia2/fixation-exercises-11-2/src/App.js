import logo from './logo.svg';
import './App.css';
import Image from './Image'

function App() {
  return (
    <div className="App">
      <Image source='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg' alternativeText='Cute cat staring'/>
    </div>
  );
}

export default App;
{
  /* Crie uma aplicação React na sua máquina via create-react-app com o nome fixation-exercises-11-2 . Crie um arquivo Image.js no diretório src do projeto e copie para esse arquivo o código escrito acima. Uma vez feito isso tudo, responda:
Qual o nome do componente declarado acima?
Chame o componente Image , de forma que seja mostrada esta imagem, ou o texto Cute cat staring , caso a imagem não consiga ser carregada.

*/}