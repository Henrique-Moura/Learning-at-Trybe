const readline = require("readline-sync");

function calculaIMC() {
  const nome = readline.question("Qual seu nome? ");
  const altura = readline.questionFloat("Informe sua altura (metro e cm) ");
  const peso = readline.questionFloat("Informe seu peso (kg) ");

  let imc = peso / (Math.pow(altura, 2));

  let situação = "Situação: Obesidade graus III e IV";

  if (imc < 18.5) {
    situação = 'Abaixo do peso (magreza)';
  }

  if (imc >= 18.5 && imc < 25) {
    situação = 'Peso normal';
  }

  if (imc >= 25 && imc < 30) {
    situação = 'Acima do peso (sobrepeso)';
  }

  if (imc >= 30 && imc < 35) {
    situação = 'Obesidade grau I';
  }

  if (imc >= 35 && imc < 40) {
    situação = 'Obesidade grau II';
  }


  console.log(`Olá, ${nome}! seu IMC é ${imc.toFixed(2)}, e sua situação é ${situação}`)
}
calculaIMC();