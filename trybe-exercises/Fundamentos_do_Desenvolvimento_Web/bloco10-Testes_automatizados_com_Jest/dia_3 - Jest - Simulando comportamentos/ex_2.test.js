/* Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.
 */

 function randomNumber() {
  return Math.floor(Math.random() * 101)
}

test('crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo.', () => {
  randomNumber = jest.fn().mockImplementation((numberOne, numberTwo) => numberOne / numberTwo);
  expect(randomNumber(14, 2)).toBe(7);
  expect(randomNumber).toHaveBeenCalled()
})