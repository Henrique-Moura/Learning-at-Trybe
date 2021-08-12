const getRepos = require('./ex_4');

/* O código abaixo busca no GitHub de um usuário, de acordo com a URL, seus repositórios, e retorna uma lista como resultado. Dada a URL 'https://api.github.com/orgs/tryber/repos' , faça um teste que verifique que os repositórios 'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator' se encontram nessa lista. */

  test('sd-01-week4-5-project-todo-list', () => {
    const url = 'https://api.github.com/orgs/tryber/repos';

    return getRepos(url).then(result => {
      expect(result).toContain('sd-01-week4-5-project-todo-list');
      expect(result).toContain('sd-01-week4-5-project-meme-generator');
    })
    // GABARITO, NÃO CONSEGUIR TESTAR POIS APARECE Cannot find module 'node-fetch' from 'trybe-exercises/bloco_10;
})