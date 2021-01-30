const { Schema, model } = require('mongoose');

const AlfSchema = new Schema({
  questao: Number,
  peso: {
    type: Number,
    min: 1,
    max: 1,
    required: true,
  },
  resposta: String,

  nome: {
    type: String,
    required: true,
  },
  turma: {
    type: String,
    required: true,
  },
  gabarito: {
    type: [Alternativas],
    required: true,
  },
  disciplina: {
    type: String,
    required: true,
  },
  educador: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    required: true,
  },
  respostas: [AlternativaSchema],
  notas: {
    type: Number,
    min: 0,
    max: 10,
    required: true,
  },
  resposta_id: {
    type: String,
    required: true,
  },
  prova_id: {
    type: String,
    required: true,
  },
  id_aluno: {
    type: String,
    required: true,
  },
});

module.exports = model('index', AlfSchema);
