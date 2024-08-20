const sequelize = require('sequelize');

//configurações da base de dados
const database = new sequelize('aulaJS', 'Aula JS', '123456123456',
{
    dialect: 'mssql', host:'localhost', port: 1433
});

database.sync();

module.exports = database;