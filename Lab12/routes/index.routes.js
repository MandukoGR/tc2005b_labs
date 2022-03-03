


const express = require('express');
const router = express.Router();
const fs = require('fs');



router.get('/', (req, res, next) => {
    res.render('index.ejs');
    
});


router.get('/preguntasAResponder', (req, res, next) => {
    res.render('preguntas2.ejs');
    
});
module.exports = router;