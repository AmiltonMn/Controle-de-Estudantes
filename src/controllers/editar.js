const aluno = require('../model/aluno')
const sala = require('../model/sala')
const fs = require('fs');

module.exports = {

    async alunos(req, res)
    {
        // Recebendo o ID da URL
        const parametro = req.params.id;
        console.log(parametro);
        const alunos = await aluno.findByPk(parametro, {
            raw: true,
            attributes: ['Nome', 'Idade', 'Sexo', 'Foto', 'IDSala']
        });

        const salas = await sala.findAll ({raw: true, attributes: ['IDSala', 'Nome'] });

        res.render('../views/editarAluno', {salas, alunos});
    },

    async adicionar(req, res){

        const dados = req.body;
        const id = req.params.id;

        if(req.file) {
            const antigaFoto = await aluno.findAll({
                raw: true,
                attributes: ['Foto'],
                where: { IDAluno: id}
            });

            if (antigaFoto[0].Foto != 'usuario.png') fs.unlink(`public/img/${antigaFoto[0].Foto}`, (err => {if(err) console.log(err); } ));

            await aluno.update (
                { Foto: req.file.filename},
                { where: {IDAluno: id }  }
            )
        }

        // Dando uptade nas novas informações
        await aluno.update({
            Nome: dados.nomeAluno,
            Idade: dados.idadeAluno,
            Sexo: dados.sexoAluno,
            IDSala: dados.IDSalaAluno
        },
        {
            where: { IDAluno: id }
        });

        res.redirect('/home');
    },

    async salas(req, res)
    {
        parametro = req.params.id;
        console.log(parametro);

        const salas = await sala.findByPk(parametro, {
            raw: true,
            attributes: ['IDSala', 'Nome', 'Capacidade']
        });

        const qtdAlunos = await aluno.findAll({
            raw: true,
            attributes: ['IDSala'],
            where: {IDSala: parametro}
        });

        console.log(qtdAlunos);

        res.render('../views/editarSala', {salas, qtdAlunos})
    },

    async salaUpdate(req, res)
    {
        const dados = req.body;
        const id = req.params.id;

        await sala.update({
            Nome: dados.Nome,
            Capacidade: dados.Capacidade
        },
        {
            where: { IDSala: id}
        });

        res.redirect('/home')
    }
} 