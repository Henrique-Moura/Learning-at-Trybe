/* Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários. */

function randomNumber() {
  return Math.floor(Math.random() * 101)
}

test('nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela', () => {
  randomNumber = jest.fn().mockImplementation((numberOne, numberTwo, numberThree) => numberOne *  numberTwo * numberThree);

  expect(randomNumber(2 , 2 , 2)).toBe(8);
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toHaveBeenCalledTimes(1);
})

test('resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro.', () => {
  randomNumber.mockReset();
  randomNumber = jest.fn().mockImplementation((a) => a * 2);

  expect(randomNumber(8)).toBe(16);
})