// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop -> diagonals
let pecasXadrez = ['peão' , 'cavalo' , 'torre' , 'rainha' , 'bispo' , 'rei' ];
let escolhida = 'REI';
switch (escolhida.toLowerCase()) {
    case 'peão':
        console.log('ande uma casa ortogonal');
    break;
    case 'cavalo':
        console.log('ande em L dois pra um');
    break;
    case 'torre':
        console.log('Ande quantas casas quiser em ortogonal');
    break;
    case 'rainha':
        console.log('Ande quantas casas quiser, tanto em diagonal ou ortogonal');
    break;
    case 'bispo':
        console.log('Ande quantas quiser na diagonal');
    break;
    case 'rei':
        console.log('Ande um casa, tanto em diagonal ou ortogonal');
    break;
    default:    
        console.log('movimento inválido');
}