const connection = require('./connection');

const getNewAuthor = (authorData) => {
  const { id, first_name: firstName, middle_name: middleName, last_name: lastName } = authorData;

  const fullName = [firstName, middleName, lastName].filter((name) => name).join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullName
  };
};

const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
  );

  return authors.map(getNewAuthor);
}

const findById = async (id) => {
  const [ authorData ] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors WHERE id=?',
    [id]
    // o ? é como um parâmetro.
  )

  if (!authorData) return null;

  return authorData

}

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;

  return true;
};

const create = async (firstName, middleName, lastName) => connection.execute(
  'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?,?,?)',
  [firstName, middleName, lastName],
);


module.exports = {
  getAll,
  findById,
  isValid,
  create,
};
