// Utilizando for , crie uma array que vá de 1 até 25 e imprima o resultado;
let array = [];
for (let index = 1; index <= 25; index += 1) {
  array.push(index)
}
console.log(array);

// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
for (let index = 0; index < array.length; index+= 1) {
  const element = array[index];
  console.log(element / 2)
}