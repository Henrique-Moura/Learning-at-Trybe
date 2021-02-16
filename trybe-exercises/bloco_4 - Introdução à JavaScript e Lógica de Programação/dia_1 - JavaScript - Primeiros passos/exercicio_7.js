// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
let number = -1;
    if(number >= 90 && number <= 100){
        console.log('A');
    } else if (number >= 80 && number <90){
        console.log('B');
    } else if (number >= 70 && number <80){
        console.log('C');
    } else if (number >= 60 && number <70){
        console.log('D');
    } else if (number >= 50 && number <60) { 
        console.log('E');
    } else if (number >0 && number <50){
        console.log('F');
    } else {
        console.log('ERRO');
    }
    