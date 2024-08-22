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

const editar = require('./src/controllers/editar');

// Iniciando as rotas
route.get('/home', home.pagInicialGet);
route.post('/home', home.pagInicialPost);

route.get('/sala', cadastro.sala);
route.post('/sala', cadastro.salaInsert);

route.get('/aluno', cadastro.aluno);
route.post('/aluno', multer(config).single('newImage'), cadastro.alunoInsert);

route.get('/editarAluno/:id', editar.alunos);
route.post('/editarAluno/:id', multer(config).single('newImage'), editar.adicionar);

route.get('/editarSala/:id', editar.salas);
route.post('/editarSala/:id', editar.salaUpdate);

module.exports = route;