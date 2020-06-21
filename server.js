const express = require('express');
const server = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const router = require('./router');
const bodyParser = require("body-parser");





mongoose.connect("mongodb+srv://glad:Gladetjuju-973@cluster0-ste1b.mongodb.net/Biblio?retryWrites=true&w=majority",
{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() => console.log('Connexion réussie !'))
.catch(() => console.log('Connexion échouée !'));

//middleaware
server.use(express.static("public"));
server.use(morgan('dev'));
server.use(bodyParser.urlencoded({extended:false}));
server.use('/', router);



server.listen(4000);