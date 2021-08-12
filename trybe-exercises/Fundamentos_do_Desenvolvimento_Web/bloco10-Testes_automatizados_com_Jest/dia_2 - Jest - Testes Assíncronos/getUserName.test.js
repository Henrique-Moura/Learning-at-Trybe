/* Utilizando a sintaxe de Promise , faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.
Dica : Veja os dados falsos utilizados no banco de dados, disponíveis na variável users , para saber quais IDs existem. */

const { getUserName, findUserById } = require('./ex_2e3')
/*
describe('simula uma chamada ao banco de dados para buscar usuários', () => {
  test('teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado', () => {
    return expect(getUserName(4)).resolves.toEqual("Mark");
  });

  test('teste para o caso em que o usuário não é encontrado', () => {
    return expect(getUserName(6)).rejects.toEqual({"error": "User with 6 not found."})
  });
}); */





// Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await .


describe('simula uma chamada ao banco de dados para buscar usuários', () => {
  test('teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado', async () => {
    await expect(getUserName(4)).resolves.toEqual("Mark");
  });

  test('teste para o caso em que o usuário não é encontrado', async () => {
    await expect(getUserName(6)).rejects.toEqual({"error": "User with 6 not found."})
  });
});