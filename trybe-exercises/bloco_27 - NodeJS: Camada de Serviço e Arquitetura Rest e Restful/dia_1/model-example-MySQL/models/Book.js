const connection = require('./connection');

async function getAllBooks() {
  const [books] = await connection.execute(
    'SELECT * FROM model_example.books;',
  );

  return books
}

module.exports = {
  getAllBooks,
};