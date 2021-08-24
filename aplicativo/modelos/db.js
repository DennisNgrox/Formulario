const Sequelize = require('sequelize');


// Conexão Banco de Dados MySql

const sequelize = new Sequelize('postagens', 'root', 'Julia#20', {
    host: "localhost",
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log('Conectado com Sucesso')
}).catch((erro) => {
    console.log("falha ao se conectar: " + erro);
});



module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
