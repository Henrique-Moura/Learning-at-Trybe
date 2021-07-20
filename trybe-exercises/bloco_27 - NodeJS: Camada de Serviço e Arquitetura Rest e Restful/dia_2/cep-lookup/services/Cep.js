const Cep = require('../models/Cep');

const findAddressByCep = async (searchedCep) => {
  // Buscamos o CEP através do Model
  const cep = await Cep.findAddressByCep(searchedCep);

  // Caso não econtre nenhum CEP, o service retorna um objeto de erro.
  if (!cep) {
    return {
      error: {
        code: 'notFound',
        message: 'CEP não encontrado'
      },
    };
  }

  // Por fim, retornamos o CEP correto
  return cep;
};

const create = async ({ cep, logradouro, bairro, localidade, uf }) => {
  // Começamos buscando o cep que estamos tentando cadastrat
  const existingCep = await Cep.findAddressByCep(cep);

  // Caso o CEP já exista, retornamos um erro dizendo que ele já existe
  if (existingCep) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'CEP já existente',
      },
    };
  }

  // Caso o CEP ainda não exista, chamamos o Model para criá-lo no banco, e devolvemos esse resultado
  return Cep.create({ cep, logradouro, bairro, localidade, uf });
};

module.exports = {
  findAddressByCep,
  create,
};
