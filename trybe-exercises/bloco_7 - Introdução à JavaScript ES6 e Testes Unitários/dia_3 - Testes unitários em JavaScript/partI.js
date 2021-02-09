const assert = require('assert');

const sum = (a, b) => {
  // if (typeof a !== 'number' || typeof b !== 'number') {
  //   throw new Error('parameters must be numbers');
  // }

  return a + b;
}

// implemente seus testes aqui
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(4, 5), 9);
assert.strictEqual(sum(0, 0), 0);
assert.strictEqual(sum(4, '5'), 9, 'Error');



// Praticando a implementação de testes


// Você vai implementar vários testes em contextos diferentes a fim de consolidar a mecânica e também a forma de pensar em testes.
// Copie as funções já implementadas e desenvolva os testes. Separe as funções em arquivos para evitar qualquer tipo de problema.
// 1. A função sum(a, b) retorna a soma do parâmetro a com o b
// 2. Teste se o retorno de sum(4, 5) é 9
// 3. Teste se o retorno de sum(0, 0) é 0
// 4. Teste se a função sum lança um erro quando os parametros são 4 e "5" (string 5)
// 5. Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

const assert = require('assert');

const myRemove = (arr, item) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
 }
 //console.log(myRemove([1, 2, 3, 4], 3));

// implemente seus testes aqui
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [ 1, 2, 4 ], "fsfsffsf");
assert.notDeepStrictEqual(([1, 2, 3, 4], 3), [1, 2, 3, 4], "dasdadasdad");
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4], "fsfsffsf");



/* A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
2-Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
3-Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
4-Verifique se o array passado por parâmetro não sofreu alterações
5-Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado */

const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }
  return arr;
}


// implemente seus testes aqui
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);


/* 3-A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array
4-Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
5-Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
6-Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
7-Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado */

const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

assert.strictEqual(myFizzBuzz(15), 'fizzbuzz');
assert.strictEqual(myFizzBuzz(12), 'fizz');
assert.strictEqual(myFizzBuzz(20), 'buzz');
assert.strictEqual(myFizzBuzz(2), 2);
assert.strictEqual(myFizzBuzz('5'), typeof num !== 'number');

// implemente seus testes aqui

/*
4 - A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
5 - Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
6 - Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
7 - Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
8 - Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
9 - Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
*/



const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

assert.deepStrictEqual(obj1, obj2);
assert.deepStrictEqual(obj2, obj3);

// implemente seus testes aqui

// 5 - Compare dois objetos (JSON) para verificar se são idênticos ou não.

