const express = require('express');
const path = require('path');
const lab14 = require(path.join(__dirname, '..', 'controllers','lab14.js'));
const router = express.Router();

router.get('/', lab14.home);

router.get('/preguntas', lab14.preguntas);
router.get('/Cookies', lab14.cookies);
router.post('/Cookies', lab14.cookiesPost);
router.get('/Sesion', lab14.sesion);

module.exports = router;