


const express = require('express');
const router = express.Router();
const fs = require('fs');



router.get('/', (req, res, next) => {
    res.sendFile(`${__dirname}/public/index.html`)
    
});


router.get('/preguntasAResponder', (req, res, next) => {
    res.sendFile(`${__dirname}/public/preguntas2.html`)
    
});
module.exports = router;