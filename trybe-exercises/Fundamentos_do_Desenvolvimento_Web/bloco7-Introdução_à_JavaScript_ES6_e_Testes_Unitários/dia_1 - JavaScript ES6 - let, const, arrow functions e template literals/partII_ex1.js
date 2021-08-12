let result = 1;
const factorial = number => {
  for(let index = 2; index <= number; index += 1) {
    result *= index;
  }
  return result
};

console.log(factorial(5))

/* Crie uma função que receba um número e retorne seu fatorial.
Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24. */
