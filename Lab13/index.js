const morgan = require('morgan');
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));


const rutas_lab11 = require(path.join(__dirname, 'routes', 'index.routes.js'));
const rutas_lab10 = require(path.join(__dirname, 'routes', 'lab10.routes.js'));



//View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Morgan
app.use(morgan('dev'));

//Static
app.use(express.static(path.join(__dirname, 'public')));

//Rutas
app.use('/', rutas_lab11);
app.use('/lab10', rutas_lab10);

                  
// 404 handler
app.use((req, res, next) => {
    res.status(404).send("Error 404: Ruta no encontrada");
})
app.listen(3000);