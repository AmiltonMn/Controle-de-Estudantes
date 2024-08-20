// Iniciando Route do Express
const express = require('express');
const route = express.Router();

// Importando os Controllers
const home = require('./src/controllers/home');
const cadastro = require('./src/controllers/cadastro');

// Iniciando Multer
const multer = require("multer");

// Recebendo arquivo do multer que criamos
const config = require('./src/config/multer');


// Iniciando as rotas
route.get('/home', home.pagInicialGet);

route.get('/sala', cadastro.sala);

route.get('/aluno', cadastro.aluno);

route.post('/sala', cadastro.salaInsert);

route.post('/home', home.pagInicialPost);

// Cadastro de aluno irá receber um arquivo com o "name" do HTML chamado de "newUserImage"
route.post('/aluno', multer(config).single('newUserImage'), cadastro.alunoInsert);

module.exports = route;