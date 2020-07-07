const express = require('express');
const server = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const app = require('./app');
const bodyParser = require("body-parser");
const session = require('express-session');

server.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

// Connexion à la base de donnée mongoDB avec mongoose
mongoose.connect("mongodb+srv://glad:Gladetjuju-973@cluster0-ste1b.mongodb.net/Biblio?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion réussie !'))
    .catch(() => console.log('Connexion échouée !'));


    
server.use(express.static("public"));
server.use(morgan('dev'));
server.use(bodyParser.urlencoded({ extended: false }));
server.set('trust proxy', 1);

server.use((req, res, next) => {
    res.locals.message = req.session.message;
    delete req.session.message;
    next();
});

// Notre application
server.use('/', app);

server.listen(4000);
