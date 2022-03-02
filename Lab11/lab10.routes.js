const express = require('express');
const router = express.Router();
const fs = require('fs');

const json_items = fs.readFileSync(`${__dirname}/public/api.json`, 'utf-8');
const items = JSON.parse(json_items);

router.get('/', (req, res, next) => {
    res.sendFile(`${__dirname}/public/lab10.html`)
    
});

router.get('/tiendita', (req, res, next) => {
    res.sendFile(`${__dirname}/public/tiendita.html`);
    
});

router.post('/tiendita', (req, res, next) => {
    console.log(req.body);
    const {precio, id, title, thumbnailUrl} = req.body;
    let newItem = {
        precio,
        id,
        title,
        thumbnailUrl
    };
    items.push(newItem);
    const json_items = JSON.stringify(items);
    console.log(newItem);
    fs.writeFileSync(`${__dirname}/public/api.json`, json_items, 'utf-8');
    res.sendFile(`${__dirname}/public/tiendita.html`);
    
});


// Archivos estáticos de tiendita
router.get('/appTiendita.js', (req, res, next) => {
    fs.createReadStream(`${__dirname}/public/appTiendita.js`).pipe(res);
});

router.get('/api.json', (req, res, next) => {
    fs.createReadStream(`${__dirname}/public/api.json`).pipe(res);
});

router.get('/validacion', (req, res, next) => {
    res.sendFile(`${__dirname}/public/validacion.html`)
    
});


// Archivos estáticos de validacion
router.get('/appValidacion.js', (req, res, next) => {
    fs.createReadStream(`${__dirname}/public/appValidacion.js`).pipe(res);
});
router.get('/preguntas', (req, res, next) => {
    res.sendFile(`${__dirname}/public/preguntas.html`)
    
});




module.exports = router;