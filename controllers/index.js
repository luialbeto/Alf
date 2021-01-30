const express = require('express');

const router = express.Router();

const fs = require('fs').promises;

const express = require('express');

const router = express.Router();

const fs = require('fs').promises;

const path = require('path');

const writeNotaFile = async (content) =>
  fs.writeFile(
    path.resolve(__dirname, '.', 'escolaAlf_DB'),
    JSON.stringify(content),
    (err) => {
      if (err) throw err;
    }
  );

const readProvaFile = async () => { 
  const content = await fs.readFile(
    path.resolve(__dirname, '.', 'escolaAlf_DB')
  );
  return JSON.parse(content.toString('utf-8'));
};

router.get('/', async (_req, res) => {
  const prova = await readProvaFile();
  res.status(200).send(prova);
});

router.get('/search', async (req, res) => {
  const { q } = req.query;
  const provas = await readProvaFile();
  const provaFiltrada = provas.filter((aluno) => aluno.name.includes(q));
  return res.status(200).send(provaFiltrada);
});

router.post('/', async (req, res) => {
  const { aluno, prova, nota } = req.body;
  console.log(req.body);
  if (!aluno) {
    return res.status(400).json({ message: 'aluno?' });
  }
  if (!prova) {
    return res.status(400).json({ message: 'prova?' });
  }
  if (Number(nota) < 10) {
    return res.status(400).json({ message: 'nota?' });
  }

  const oldNota = await readAlunoFile();
  const id = oldAluno.length + 1;
  const newArrayOfNota = [
    ...oldNota,
    {
      id,
      aluno,
      prova,
      nota,
    },
  ];

  await writeNotaFile(newArrayOfNota);
  res.status(201).json(newArrayOfNota[id - 1]);
});

router.put('/:id', async (req, res) => {
  const { aluno, prova, nota } = req.body;
  const { id } = req.params;
  const { authorization } = req.headers;
  const provas = await readProvaFile();

  const respostas = provas.find((aluno) => aluno.id === Number(id));
  if (!respostas) {
    return res.status(404).json({ message: 'não encontrado' });
  }
  
  const { aluno, prova, nota } = req.body;
  const notaAnterior = await readNotaFile();
  const newArrayOfNota = notaAnterior.map((value) => {
    if (value.id === Number(id)) {
      return {
        id: Number(id),
        aluno,
        prova,
        nota,
        }
    };
  await writeNotaFile(newArrayOfNota);
  res.status(200).json(newArrayOfNota[id - 1]);
  })
});

module.exports = indexController;
