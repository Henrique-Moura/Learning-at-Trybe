/* Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.
 */

const service = require('./ex_4');


describe('tentando functions upperCase, stringFirstWord, concatenateString', () => {
  test('Faça uma nova implementação para upperCase, mas agora ela deve retornar a string em caixa baixa.', () => {
    const first = jest.spyOn(service, "upperCase")
    .mockImplementation((string) => string.toLowerCase())

    expect(first('HELLO')).toBe('hello');

    service.upperCase.mockRestore();

    expect(first("lowercase")).toBe("LOWERCASE");
  })

  test('Para stringFirstWord, uma nova implementação deve retornar a última letra de uma string.', () => {
    stringFirstWord.mockImplementation((string) => string.split('').pop())

    expect(stringFirstWord('Hello')).toBe('o');
  })

  test( 'A contatenateString deve receber três strings e concatená-las.', () => {
    concatenateString.mockImplementation((stringA, stringB, stringC) => `${stringA} ${stringB} ${stringC}`)

    expect(concatenateString('Hello', 'World', '!')).toBe('Hello World !')
  })
})