const sala = require('../model/sala');
const aluno = require('../model/aluno');

module.exports = {
    async sala(req, res){
        res.render('../views/sala');
    },

    async aluno(req, res){
        const salas = await sala.findAll({
            raw: true,
            attributes: ['IDSala', 'Nome']
        });

        res.render('../views/aluno', {salas});
    },

    async salaInsert(req, res){

        // Recebe as informações do front-end
        const dados = req.body;

        // Criando sala no banco de dados
        await sala.create({
            Nome: dados.nome,
            Capacidade: dados.capacidade
        });

        // Redirecionar para a página principal
            res.redirect('/home');
        },
    
    async alunoInsert(req, res){

        const dados = req.body;

        let foto = 'usuario.png';

        if (req.file) {
            foto = req.file.filename;
        };

        await aluno.create ({
            Nome: dados.nomeAluno,
            Idade: dados.idadeAluno,
            Sexo: dados.sexoAluno,
            IDSala: dados.IDSalaAluno,
            Foto: foto
        });

        res.redirect('/home');
    },
}
