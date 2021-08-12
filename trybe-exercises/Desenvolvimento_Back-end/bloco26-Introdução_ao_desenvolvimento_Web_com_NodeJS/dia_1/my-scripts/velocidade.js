const readline = require("readline-sync");

function calculaVelocidadeMedia () {
  const distancia = readline.questionInt("Distância em Metros? ");
  const tempo = readline.questionInt("Tempo em segundos? ");

  const velocidadeMedia = (distancia / tempo).toFixed(2);

  console.log(`Velocidade média: ${velocidadeMedia} m/s`);

}

calculaVelocidadeMedia();10800