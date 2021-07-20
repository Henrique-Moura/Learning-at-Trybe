// Carregamos as variáveis de ambiente
require('dotenv').config();

const app = require('express')();
const bodyParser = require('body-parser').json();

const controllers = require('./controllers/ping');
const Cep = require('./controllers/Cep');
const errorMiddleware = require('./middlewares/error.js');

// Lemos a porta da variável de ambiente, ou usamos 3000
const PORT = process.env.PORT || 3000;

app.use(bodyParser);

app.get('/ping', controllers.ping);
app.get('/cep/:cep', Cep.findAddressByCep);
app.post('/cep', Cep.create);

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Rodando porta: ${ PORT }`));