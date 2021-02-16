/* Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
Valor de teste: N = 5 .
Valor esperado no retorno da função: 1+2+3+4+5 = 15 . */
let n = 0;
function sum(number) {
  for (let index = 0; index <= number; index +=1) {
    n += index
  }
  return n
}
console.log(sum(5));