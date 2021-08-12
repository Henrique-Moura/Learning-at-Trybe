const bodyParser = require('body-parser');
const express = require('express');
const rescue = require('express-rescue');
const app = express();
const PORT = 3000;

const { getSimpsons, setSimpsons } = require('./fs-utils');

app.use(bodyParser.json());
/* 1. Crie uma rota GET /ping
Sua rota deve retornar o seguinte JSON: { message: 'pong' }
 */
app.get('/ping', (req, res, next) =>{
  res.json({ "message": "pong" })
});

/* 2. Crie uma rota POST /hello
Sua rota deve receber, no body da requisição, o seguinte JSON: { "name": "<nome do usuário>" }
Sua rota deve retornar o seguinte JSON: { "message": "Hello, <nome do usuário>!" } .
 */
app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).json({ "message": `Hello, ${ name }`});
});

/* 3.Crie uma rota POST /greetings
Sua rota deve receber o seguinte JSON: { "name": "<nome do usuário>", "age": <idade do usuário> } .
Caso a pessoa usuária tenha idade superior a 17 anos, devolva o JSON { "message": "Hello, <nome do usuário>!" } com o status code 200 - OK .
Caso a pessoa usuária tenha 17 anos ou menos, devolva o JSON { "message": "Unauthorized" } com o status code 401 - Unauthorized .
 */
app.post("/greetings", (req, res) => {
  const { name, age } = req.body;
  if ( age > 17 ) {
    return res.status(200).json({
      "message": `Hello, ${ name }`
    });
  }
  return res.status(401).json({
    "message": "Unauthorized"
  })
});


/* 4.Crie uma rota PUT /users/:name/:age .
Sua rota deve retornar o seguinte JSON: { "message": "Seu nome é <name> e você tem <age> anos de idade" } . */
app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.body;

  res.status(200).json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` })
});

/* 5.Crie uma API de dados das personagens de Simpsons
Utilize o modulo fs do Node para ler/escrever arquivos.
Caso algum erro ocorra, deve ser retornado um código 500 (Internal Server Error).
Caso dê tudo certo, a resposta deve voltar com status 200 OK .
 */

app.get('/simpsons', async (req, res) => {
  const simpsons = await getSimpsons();

  return res.status(200).json(simpsons)
})

app.get('/simpsons/:id', rescue(async (req, res) => {
  const simpsons = await getSimpsons();

  const simpson = simpsons.find(({ id }) => id === req.params.id)

  if (!simpson) {
    return res.status(404).json({ message: 'simpson not found' })
  }

  return res.status(202).json(simpson);
}));


app.listen(PORT, () => {
  console.log(`Aplicação rodando na Porta: ${PORT}`);
});