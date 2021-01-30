const express = require('express');

const path = require('path');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const indexController = require('./controllers');

const app = express();

app.use(bodyParser.json());

const PORT = 3000;

app.use('/get', indexController);

app.use('/post', indexController);

app.use('/put', indexController);

app.get('/', (_request, response) => {
    response.send();
});

app.listen(PORT, () => {
    console.log(`Pai tá on na porta ${PORT}`);
});


