const sala = require('../model/sala');
const aluno = require('../model/aluno');

module.exports = {
    async pagInicialGet(req, res){

        const salas = await sala.findAll({
            raw: true,
            attributes: ['IDSala', 'Nome']
        });

        res.render('../views/home', {salas, alunos: '', id: ''});
    },

    async pagInicialPost(req, res){

        const id = req.body.IDSalaAluno;
        
        const alunos = await aluno.findAll({
            raw: true,
            attributes:['IDAluno', 'Nome', 'Idade', 'Foto'],
            where: {IDSala: id}
        });
        
        const salas = await sala.findAll ({
            raw: true,
            attributes: ['IDSala', 'Nome', 'Capacidade']
        });

        let vagasDisp = await sala.findAll({
            raw: true,
            attributes:['Capacidade'],
            where: { IDSala: id }
        });
        
        let qtdAlunos = await aluno.findAll({
            raw: true,
            attributes: ['IDSala'],
            where: {IDSala: id}
        });

        qtdAlunos = qtdAlunos.length;

        if(id > 0)
        {
            vagasDisp = vagasDisp[0].Capacidade - qtdAlunos;
        }

        console.log(vagasDisp);

        res.render('../views/home', {salas, alunos, id, vagasDisp, qtdAlunos});
    }
}