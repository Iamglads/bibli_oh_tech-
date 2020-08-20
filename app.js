const express = require('express');
const app = express();


// Connexion à la base de donnée mongoDB avec mongoose
mongoose.connect("mongodb+srv://glad:Gladetjuju-973@cluster0-ste1b.mongodb.net/Biblio?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion réussie !'))
    .catch(() => console.log('Connexion échouée !'));

app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

app.use((req, res, next) => {
    res.locals.message = req.session.message;
    delete req.session.message;
    next();
});
app.use(express.static("public"));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.set('trust proxy', 1);

module.exports = app;