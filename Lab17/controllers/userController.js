const path = require('path');
const User = require(path.join(__dirname , '..', 'models', 'usuario.js'));

exports.get_login =  (req, res, next) => {
    const usuario = req.session.usuario ? req.session.usuario : '';
    console.log(req.session.usuario);
    res.render('login', {
        usuario: usuario,
    });
};

exports.login =  (req, res, next) => {
    if (User.login(req.body.nombre, req.body.passwd)) {
        req.session.usuario = req.body.nombre;
        res.redirect('/');
    } else {
        res.redirect('/users/login');
    }
};

exports.logout =  (req, res, next) => {
    req.session.destroy(() => {
        res.redirect('/'); //Este código se ejecuta cuando la sesión se elimina.
    });
};