const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const json_items = fs.readFileSync(path.join(__dirname, '..', 'public', 'js',  'api.json'));
items = JSON.parse(json_items);
    
    
router.get('/', (req, res, next) => {
    res.render('lab10.ejs')
    
});

router.get('/tiendita', (req, res, next) => {
    res.render('tiendita.ejs')
    
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
    fs.writeFileSync(path.join(__dirname, '..', 'public', 'js', 'api.json'), json_items, 'utf-8');
    res.render('tiendita.ejs');
    
});


router.get('/validacion', (req, res, next) => {
    res.render('validacion.ejs');
    
});

router.get('/preguntas', (req, res, next) => {
    res.render('preguntas.ejs');
    
});




module.exports = router;