/* Ao realizar testes assíncronos, é necessário ter cuidado com falso-positivos, pois o Jest não sabe, por padrão, quando é necessário esperar o término da execução de uma função assíncrona. Ou seja, você roda o teste, o Jest analisa as funções síncronas, não espera as assíncronas terminarem e, dado o final do teste, gera um resultado positivo antes de um eventual problema numa função assíncrona acusar um erro.
O exemplo abaixo gera um falso-positivo:
 */

// test("Não deveria passar!", () => {
//   setTimeout(() => {
//     expect(10).toBe(5);
//     console.log('Deveria falhar!')
//   }, 500);
// });

/* Para o Jest esperar a função assíncrona ser finalizada, é necessário utilizar uma callback própria da biblioteca, chamada done , que precisa ser chamada após os testes assíncronos.
Agora o Jest no exemplo abaixo consegue identificar o erro. */

// test("Não deveria passar!", done => {
//   setTimeout(() => {
//     expect(10).toBe(5);
//     console.log('Deveria falhar!')
//     done();
//   }, 500);
// });


/* Quando estiver realizando testes, sempre procure verificar se o seu teste não está exibindo resultados falso-positivos. No exemplo acima, em que o teste está passando, basta mudar o valor final do expect de .toBe(15) para analisar outros cenários.
Mude o valor .toBe(15) para .toBe(10) e verifique. O esperado é o teste identificar o erro. Caso isso ocorra, quer dizer que o seu teste está correto; caso continue passando e não encontre o erro, provavelmente seu teste está com algum falso-positivo. */

const SumNumbers = (a, b, callback) => {
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 500)
}

test('Testando SumNumbers, soma 5 mais 10', done => {
  SumNumbers(5, 10, (result) => {
    expect(result).toBe(10);
    done();
  });
})