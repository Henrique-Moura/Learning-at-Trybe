// Construtor
const promise = new Promise((resolve, reject) => {

});


// Existe apenas uma pequena diferença entre o resolve/reject e o return : enquanto o return interrompe a excução da função quando é chamado, o resolve/reject não o fazem, por isso é importante utilizar um return antes de um deles quando não se quer que a execução continue (esse pattern se chama 'early-return', mas não se preocupe com nomes agora). Vamos colocar em prática o que vimos aqui!
// Para simular uma situação de sucesso e erro, vamos utilizar o Math.random() para sortear um valor de 0 a 10. Se o valor for entre 0 e 5 (com 5 incluso), será um fracasso, caso o valor seja entre 6 e 10, será um sucesso. Nosso programa ficaria assim:

const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 11);

  if (number <= 5) {
    return reject(console.log(`Que fracasso =( Nosso número foi ${number}`));
  }
  resolve(console.log(`Que sucesso =) nosso número foi ${number}`));
});

// Existem 2 principais ferramentas que podemos usar para gerir o fluxo assíncrono com promises: o .then() e o .catch() . Vamos começar falando sobre o .then() . Para isso , vamos refatorar nossa promise:
const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 11);

  if (number <= 5) {
    return reject(console.log(`Que fracasso =( Nosso número foi ${number}`));
  }
  resolve(number);
})
.then(number => `Que sucesso =) nosso número foi ${number}`)
.then(msg => console.log(msg));


// o erro continua acontecendo. O que podemos fazer em relação a isso? Agora entra o .catch() ! Vamos adicioná-lo ao código:

const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random()* 11);

  if (number <= 5) {
    return reject(number);
  }
  resolve(number);
})
.then(number => `Que sucesso =) nosso número foi ${number}`)
.then(msg => console.log(msg))
.catch(number => console.log(`Que fracasso =( Nosso número foi ${number}`));


// Vamos criar uma promise que faz um fetch apenas para um endpoint específico. Para isso, vamos usar como "endpoint" uma url que nos retorna elogios sobre Chuck Norris (elogios, porque ninguém faz piadas com Chuck Norris).
const fetch = require('node-fetch');

function verifiedFetch(url) {
  return new Promise((resolve, reject) => {
    if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
      fetch(url)
        .then((r) => r.json())
        .then((r) => resolve(r.value));
    } else {
      reject(new Error('endpoint não existe'));
    }
  });
}


const fetch = require('node-fetch');

function verifiedFetch(url) {
  return new Promise((resolve, reject) => {
    if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
      fetch(url)
        .then((r) => r.json())
        .then((r) => resolve(r.value));
    } else {
      reject(new Error('endpoint não existe'));
    }
  });
}



// O que será exibido no console ao se executar sendJokeToFriend ?

function sendJokeToFriend(name) {
  const message = verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
    .catch((err) => err);
  console.log(message);
}

sendJokeToFriend("Anna");

// O async é uma mão na roda. Essa funcionalidade transforma qualquer função em uma promise. Para começar a usá-la, basta colocar o async antes da definição da função. Agora é só transformar o que é resolve em return e o que é reject em throw e BOOM! Sua promise com async está pronta. Vamos refatorar a função verifiedFetch para usar async :
const fetch = require('node-fetch');

async function verifiedFetch(url) {
  if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
    return fetch(url)
      .then((r) => r.json())
      .then((r) => r.value);
  }
  throw new Error('endpoint não existe');
}

function sendJokeToFriend(name) {
  const message = verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
    .catch((err) => err);
  console.log(message);
}

sendJokeToFriend("Anna");


// A funcionalidade async sozinha é fantástica mas não resolve nosso problema com a função sendJokeToFriend . Assim, junto com ela vem um bônus, o await . O await só pode ser usado dentro de uma função com async e ela faz exatamente o que diz, faz com o que a função espere uma resposta para continuar sua execução. Vamos refatorar sendJokeToFriend :
const fetch = require('node-fetch');

async function verifiedFetch(url) {
  if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
    return fetch(url)
      .then((r) => r.json())
      .then((r) => (r.value));
  }
  throw new Error('endpoint não existe');
}

async function sendJokeToFriend(name) {
  const message = await verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
    .catch((err) => err);
  console.log(message);
}

sendJokeToFriend("Anna");