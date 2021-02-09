/* 3- Agora inverta o lado do triângulo. Por exemplo:
n = 5

    *
   **
  ***
 ****
***** */


let contador = 5;
let n = 5;
let asteriscos = "*";
let vazio = ' ';
for(let index = 1; index <= base; index += 1){
  n -= 1;
  console.log(`${vazio.repeat(n)}${asteriscos.repeat(index)}`);
}
