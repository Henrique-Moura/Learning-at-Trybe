/* Depois, faça uma pirâmide com n asteriscos de base:
n = 5

  *
 ***
***** */

let base = 5;
let sub = 5;
let asteriscos = "*";
let vazio = ' ';
for(let index = 1; index <= base; index += 1){
  sub -= 1;
  console.log(`${vazio.repeat(sub)}${asteriscos.repeat(index)}`);
  index +=1
}
