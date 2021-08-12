let input = `7`
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var linha = input.split('\n');
console.log(linha);
var numero = parseFloat(linha.shift());
console.log(numero);

/* linha.forEach((number) => parseInt(number))

let cartas = []
for (let index = 1; index <= numero; index += 1) {
  cartas.push(index)
}
cartas.push(0)
console.log(cartas); */





/* A cerca foi muito bem construída, com postes de concreto a cada dois metros, e arame farpado encerrando o perímetro de toda a fazenda (o perímetro, em metros, é um número par, o que torna a cerca perfeitamente regular).

um poste de madeira será utilizado para substituir um poste de concreto ausente / quebrado somente se o comprimento do arame farpado necessário para fechar a distância até o próximo poste (de madeira ou concreto) for superior a quatro metros.

escrever um programa que determine a menor quantidade de postes de madeira que são necessários para fechar as lacunas da cerca, de acordo com a decisão dos proprietários.


 */


/*
1002		Área do Círculo

function areaDoCirculo(raio) {
  const valorN = 3.14159;
  let area = valorN * Math.pow(raio, 2);
  return area.toFixed(4);
}

console.log(`A=${areaDoCirculo(raio)}`); */