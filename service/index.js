const alfSchema = require('../models/index');

const getAll = async () => model.getAll();

const getById = async (id) => {
  const aluno = await model.getById(id);
  if (!aluno) {
    return {
      error: true,
      code: 'invalid_data',
      message: 'aluno not found',
      statusCode: 404,
    };
  }
  return aluno;
};

const create = async (aluno, gabaritos) => {
  if (!aluno) {
    return {
      error: true,
      code: 'invalid_data',
      message: 'Err',
      statusCode: 400,
    };
  }
  return model.create(gabaritos);
};

const update = async (aluno, nota, id) => {
  const aluno = await model.getById(id);
  if (!aluno) {
    return {
      error: true,
      code: 'invalid_data',
      message: 'Erro',
      statusCode: 401,
    };
  }
  return model.update(nota, id);
};

module.exports = {
  create,
  getAll,
  getById,
  update,
};
