const morgan = require('morgan');
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');
const csrfProtection = csrf();

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());


const rutas_lab14 = require(path.join(__dirname, 'routes', 'index.routes.js'));
const users = require(path.join(__dirname, 'routes', 'auth.routes.js'));



//View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Morgan
app.use(morgan('dev'));

//Static
app.use(express.static(path.join(__dirname, 'public')));

//Sesion
app.use(session({
    secret: 'ñlknaeañco3pom4ñi3jrcñlawjomxñi3iq3mc4rsejf0438cnf83h4cknh43ui', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));
//CSRF
app.use(csrfProtection); 
app.use((req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
});
//Rutas
app.use('/', rutas_lab14);
app.use('/users', users);
app.use('/preguntas', users);
   
// 404 handler
app.use((req, res, next) => {
    res.status(404).send("Error 404: Ruta no encontrada");
})
app.listen(3000);