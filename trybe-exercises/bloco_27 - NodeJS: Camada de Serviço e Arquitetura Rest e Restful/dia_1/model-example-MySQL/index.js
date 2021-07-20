const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Author = require('./models/Author');
const Book = require('./models/Book');
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());


app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const [author] = await Author.findById(id);
  console.log(author);
  if (!author) return res.status(404).json({ message: 'Not found' });

  return res.status(200).json(author);
});


app.get('/books', async (req, res) => {
  const books = await Book.getAllBooks();
  return res.status(200).json(books);
})

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValid(first_name, middle_name, last_name)) {
      return res.status(400).json({ message: 'Dados inválidos' });
  }

  await Author.create(first_name, middle_name, last_name);

  res.status(201).json({ message: 'Autor criado com sucesso! '});
});


app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});
