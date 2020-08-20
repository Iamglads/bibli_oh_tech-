const express = require('express');
const server = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const router = require('./router');
const bodyParser = require("body-parser");
const session = require('express-session');

const { MONGO_URI} = require('./config');


// Connexion à la base de donnée mongoDB avec mongoose
mongoose.connect(MONGO_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion réussie !'))
    .catch(() => console.log('Connexion échouée !'));


server.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))






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
server.use('/', router);
server.listen(4000);
