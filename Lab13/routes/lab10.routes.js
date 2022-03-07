const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const lab10 = require(path.join(__dirname, '..', 'controllers','lab10.js'));
const json_items = fs.readFileSync(path.join(__dirname, '..', 'public', 'js',  'api.json'));
items = JSON.parse(json_items);
     
router.get('/', lab10.inicio);

router.get('/tiendita', lab10.tiendita);

router.post('/tiendita', lab10.tienditaAddItem);

router.get('/validacion', lab10.validacion);

router.get('/preguntas', lab10.preguntas);

module.exports = router;