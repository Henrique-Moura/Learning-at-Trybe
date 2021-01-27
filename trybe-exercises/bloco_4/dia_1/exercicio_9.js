// Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
// Bonus: use somente um if

let um = 1;
let dois = 2;
let tres = 3;
let boleano = false

if (um % 2 !== 0  || dois % 2 !== 0 || tres % 2 !== 0) {
  boleano = true;
}
console.log(boleano)