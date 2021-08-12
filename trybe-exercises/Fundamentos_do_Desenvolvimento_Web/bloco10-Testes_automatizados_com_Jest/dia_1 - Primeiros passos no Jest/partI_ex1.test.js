const sum = require('./partI_ex1');

test('A função sum(a, b) deve retornar a soma do parâmetro a com o b', () => {
  expect(sum(1 , 2)).toBe(3);
  expect(sum(4, 5)).toBe(9);
  expect(sum(0 ,0)).toBe(0);
  expect(() => { sum(4 , '5') }).toThrow();
  expect(() => { sum(4, '5') }).toThrowError(/parameters must be numbers/);
})