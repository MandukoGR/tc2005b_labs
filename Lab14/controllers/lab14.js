const path = require('path');
const Item = require(path.join(__dirname , '..', 'models', 'item.js'));

exports.home = (req, res, next) => {
    res.render('index.ejs', {
        usuario: req.session.usuario
    });
   
};

exports.preguntas = (req, res, next) => {
    res.render('preguntas.ejs');
};

exports.sesion = (req, res, next) => {
    res.render('login.ejs');
};
exports.cookies = (req, res, next) => {
    res.render('cookies.ejs', {
        items: Item.fetchAll(),
        ultimo_item: req.cookies.ultimo_item
    });
};

exports.cookiesPost = (req, res, next) => {
    console.log(req.body);
    const item = new Item(req.body.precio, req.body.id, req.body.title, req.body.thumbnailUrl);
    item.save();
    res.setHeader('Set-Cookie', 'ultimo_item ='+item.title );
    res.redirect('/Cookies');
};