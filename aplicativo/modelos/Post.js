const db = require('./db');

const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.TEXT
    },

    conteudo: {
        type: db.Sequelize.TEXT
    }
})

// Post.sync({force: true}) // CRIAR A TABELA, RECRIAR A TABELA

module.exports = Post




