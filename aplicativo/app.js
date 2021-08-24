const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const Post = require('./models/Post')

// Config
    // Template Engine 
    app.engine('handlebars', handlebars({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');


// Body Parser

app.use(express.urlencoded({extended: false}))
app.use(express.json())

//Rota de Cadastro
app.get('/', function(req, res){
    Post.findAll({order: [['id', 'DESC']]}).then((posts) => {
        res.render('home', {posts: posts})
    })  
});


    app.get('/cad', function(req, res){
    res.render('formulario');
});

// Rota do Envio de Dados

app.post('/add', function(req, res){
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(() => {
        res.redirect('/')
    }).catch((erro) => {
        res.send('error: ' + erro)
    })
});

// Rodar Servidor na porta 8081
app.listen(8081, function(){
    console.log("Pagina Disponivel");
});

