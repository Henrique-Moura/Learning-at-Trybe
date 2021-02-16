/* A função techList recebe como parâmetros um array contendo uma lista de tecnologias e uma string com um nome. Para cada tecnologia no array a função cria, em ordem alfabética, um objeto com a seguinte estrutura:

{
  tech: 'nomeTecnologia',
  name: name,
}

Implemente a função techList a partir dos testes partII_ex2.test. Experimente refatorar a função que você criou para esse projeto! É importante nunca alterar os testes ou as variáveis já escritas no código .

*/

function techList(array, string) {
  const newArray = [];
  array
  .sort()
  .forEach(tecnologias => newArray
    .push({
      tech: tecnologias,
      name: string,
    }));
  return array.length === 0 ? 'Vazio!' : newArray;
};

module.exports = techList;