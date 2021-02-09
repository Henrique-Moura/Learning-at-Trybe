/* Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1]; .
Valor esperado no retorno da função: 4 . */
let higherNumber;
let higherIndex;
function lowestNumberIndex(array) {
  higherNumber = array[0];
  for (let index = 0; index < array.length; index += 1) {
    if (higherNumber < array[index]) {
      higherNumber = array[index];
      smallestIndex = index;
    }
  }
  return smallestIndex;
};

console.log(lowestNumberIndex([2, 3, 6, 7, 10, 1]));

/* function indiceDoMaior(numeros) {
  let indiceMaior = 0;
  for (let indice in numeros) {
    if (numeros[indiceMaior] < numeros[indice]) {
      indiceMaior = indice;
    }
  }
  return indiceMaior;
}
SOLUÇÃO DO GABARITO
*/