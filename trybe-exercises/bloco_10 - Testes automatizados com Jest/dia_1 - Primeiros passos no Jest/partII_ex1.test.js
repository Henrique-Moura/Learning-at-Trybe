const { encode, decode } = require('./partII_ex1.js');

test('Teste se encode e decode são funções', ()=> {
  expect(typeof encode).toBe('function');
  expect(typeof decode).toBe('function');
});

test('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
  expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
});

test('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente', () => {
  expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');
});

test('Teste se as demais letras/números não são convertidos para cada caso', () => {
  expect(encode('A, B, r, q, g, h, p')).toBe('A, B, r, q, g, h, p');
  expect(decode('6, 7, 8, 9, 0')).toBe('6, 7, 8, 9, 0');
});

test('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
  expect(encode('a, e, i, o, u').length).toBe(13);
  expect(encode('hello').length).toBe(5);
  expect(decode('1, 2, 3, 4, 5').length).toBe(13);
})