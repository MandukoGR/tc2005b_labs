
const express = require('express');
const path = require('path');
const lab13 = require(path.join(__dirname, '..', 'controllers','lab13.js'));
const router = express.Router();

router.get('/', lab13.home);

router.get('/preguntasAResponder', lab13.preguntas);

module.exports = router;