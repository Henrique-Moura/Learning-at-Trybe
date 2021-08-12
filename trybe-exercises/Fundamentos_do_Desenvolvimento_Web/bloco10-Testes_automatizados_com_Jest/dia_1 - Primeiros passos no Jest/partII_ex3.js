/*
A função hydrate recebe uma string no formato "numero bebida", e retorna a sugestão de quantos copos de água você deve beber para se hidratar. Para cada bebida, deve-se tomar um copo de água para não ter ressaca. Exemplo:

// string recebida
'1 cerveja'
// retorno da função
'1 copo de água'

// string recebida
'1 cerveja, 2 shots e 1 catuaba'
// retorno da função
'4 copos de água'

// string recebida
'2 caipirinhas'
// retorno da função
'2 copos de água'

Implemente a função hydrate a partir dos testes partII_ex3.test. Experimente refatorar a função que você criou para o projeto Playground Function! É importante nunca alterar os testes ou as variáveis já escritas no código.
*/

function hydrate(string) {
  let number = string.split(' ')[0];
  return `${number} copos de água`;
}

module.exports = hydrate;