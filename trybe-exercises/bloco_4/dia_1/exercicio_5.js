// Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.
// Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus. Caso os ângulos estejam inválidos, o programa deve retornar uma mensagem de erro.
let anguloA = 80;
let anguloB = 60;
let anguloC = 40;
let soma = anguloA + anguloC + anguloB;

if(soma === 180){    
    console.log('true');
} else if (soma >= 1 && soma <= 179 && anguloA > 0 && anguloB > 0 && anguloC > 0) {
    console.log('false');
} else {
    console.log('erro');
}