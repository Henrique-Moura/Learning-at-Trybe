// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome("arara") ;
// Retorno esperado: true
// verificaPalindrome("desenvolvimento") ;
// Retorno esperado: false

function verificaPalindrome(string) {
  let reverse = string.split('').reverse().join('');
  return reverse === string ? true : false
}
console.log(verificaPalindrome("desenvolvimento"));
