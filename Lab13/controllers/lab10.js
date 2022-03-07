const fs = require('fs');
const path = require('path');

exports.inicio = (req, res, next) => {
    res.render('lab10.ejs');
   
};

exports.tiendita = (req, res, next) => {
    res.render('tiendita.ejs');
   
};

exports.tienditaAddItem = (req, res, next) => {
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
   
};

exports.validacion = (req, res, next) => {
    res.render('validacion.ejs');
   
};

exports.preguntas = (req, res, next) => {
    res.render('preguntas.ejs');
   
};

