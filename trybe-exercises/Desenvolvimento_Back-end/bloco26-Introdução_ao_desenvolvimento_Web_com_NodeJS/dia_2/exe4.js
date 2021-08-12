/* Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson . */

const fs = require('fs').promises

fs.readFile('./simpsons.json', 'utf-8')
  .then((fileContent) => {
    return JSON.parse(fileContent)
  })
  .then((simpsons) => {
    return simpsons.map(({ id, name }) => `${ id } - ${ name }`);
  })
  .then((strings) => {
    strings.forEach((string) => console.log(string));
  })

/* Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
 */

async function getSimpsonById(id) {
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));

  const chosenSimpson = simpsons.find((simpson) => simpson.id === id);

   if (!chosenSimpson) {
     /* A palavra-chave `throw` dispara um erro que deve ser tratado por quem chamou nossa função.
      * Em funções `async`, utilizar `throw` faz com que a Promise seja rejeitada,
      * tendo como motivo o que passarmos para o `throw`.
      * Ou seja, a linha abaixo rejeita a Promise da nossa função com o motivo 'id não encontrado'
      */
    throw new Error('id não encontrado');
  }

     /* Da mesma forma que `throw` aciona o fluxo de erro e rejeita a Promise,
      * `return` aciona o fluxo de sucesso e resolve a Promise.
      * Sendo assim, a linha abaixo é equivalente a chamar `resolve(chosenSimpson)`
      * dentro do executor de uma Promise.
      */
    return chosenSimpson;
}

/* Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
*/
const fs = require('fs').promises;

async function filterSimpsons() {
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));

  const newArray = simpsons.filter(simpson => simpson.id !== '10' && simpson.id !== '6');

  await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
}


/* Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.
*/
const fs = require('fs').promises;

async function createSimpsonsFamily() {
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));

  const simpsonsFamily = simpsons.filter(simpson => [1, 2, 3, 4].includes(simpson.id));

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}




/* Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz */
const fs = require('fs').promises;

async function addNelsonToFamily() {
  const simpsonsFamily = await fs
    .readFile('./simpsonsFamily.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));

  simpsonsFamily.push({ "id": "8","name": "Nelson Muntz" });

  await fs.writeFile('./simpsonsFamily.json', simpsonsFamily);
}

/* Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json */

// Importamos o módulo de promises do fs
const fs = require('fs').promises;

function replaceNelson () {
  // Realizamos a leitura do arquivo
  return fs.readFile('./simpsonsFamily.json', 'utf-8')
    // Interpretamos o conteúdo como JSON
    .then((fileContent) => JSON.parse(fileContent))
    // Filtramos o array para remover o personagem Nelson
    .then((simpsons) => simpsons.filter((simpson) => simpson.id !== '8'))
    // Criamos um novo Array contendo a personagem Maggie
    .then((simpsonsWithoutNelson) => simpsonsWithoutNelson
      .concat([{ id: '8', name: 'Maggie Simpson' }]))
    // Escrevemos o novo array no arquivo
    .then((simpsonsWithMaggie) =>
      fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie)));
}