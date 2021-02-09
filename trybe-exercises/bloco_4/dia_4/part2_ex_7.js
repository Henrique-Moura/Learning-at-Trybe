/* Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
Valor de teste: "trybe" e "be"
Valor esperado no retorno da função: true
verificaFimPalavra("trybe", "be") ;
Retorno esperado: true
verificaFimPalavra("joaofernando", "fernan") ;
Retorno esperado: false */

function verificaFimPalavra(stringWord, stringEnding) {
  return stringWord.slice(-stringEnding.length) === stringEnding ? true : false
}
console.log(verificaFimPalavra("joaofernando", "fernan"));
console.log(verificaFimPalavra("trybe", "be"));