// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .
let numero = 7;
let asteriscos = "*";
    for(let linha = 0; linha <= numero; linha += 1){
        for (let coluna = 0; coluna <= numero; coluna += 1)
        console.log(asteriscos);
    } 