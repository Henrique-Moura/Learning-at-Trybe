// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .
let numero = 5;
let asteriscos = "*";
for(let linha = 0; linha < numero; linha += 1){
  console.log(asteriscos.repeat(numero));
}