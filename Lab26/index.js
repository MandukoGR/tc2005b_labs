const morgan = require('morgan');
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');
const multer = require('multer');
const csrfProtection = csrf();


app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());


const rutas_lab14 = require(path.join(__dirname, 'routes', 'index.routes.js'));
const users = require(path.join(__dirname, 'routes', 'auth.routes.js'));

//Archivos
//fileStorage: Es nuestra constante de configuración para manejar el almacenamiento
const fileStorage = multer.diskStorage({
    destination: (req, file, callback) => {
        //'uploads': Es el directorio del servidor donde se subirán los archivos 
        callback(null, 'uploads');
    },
    filename: (req, file, callback) => {
        //aquí configuramos el nombre que queremos que tenga el archivo en el servidor, 
        //para que no haya problema si se suben 2 archivos con el mismo nombre concatenamos el timestamp
        callback(null, new Date().toISOString() + '-' + file.originalname);
    },
});
app.use(multer({ storage: fileStorage }).single('archivo')); 

//View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//Morgan
app.use(morgan('dev'));

//Static
app.use(express.static(path.join(__dirname, 'uploads')));


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