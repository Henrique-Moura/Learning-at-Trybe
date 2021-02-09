/* Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
n = 5

*
**
***
****
***** */
let numero = 5;
let asteriscos = "*";
for(let linha = 1; linha <= numero; linha += 1){
  console.log(asteriscos.repeat(linha));
}
