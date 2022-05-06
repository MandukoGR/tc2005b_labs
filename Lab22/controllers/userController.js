const { render } = require('express/lib/response');
const path = require('path');
const bcrypt = require('bcryptjs');
const User = require(path.join(__dirname , '..', 'models', 'usuario.js'));

exports.get_login =  (req, res, next) => {
    const usuario = req.session.usuario ? req.session.usuario : '';
    console.log(req.session.usuario);
    res.render('login', {
        usuario: usuario
    });
};

exports.login =  (req, res, next) => {
    User.findOne(req.body.nombre)
        .then(([rows, fieldData]) => {
            console.log(rows);
            if (rows.length < 1) {
                return res.redirect('/users/login');
            }
            const user = new User(rows[0].nombre, rows[0].usuario, rows[0].passwd)
            bcrypt.compare(req.body.passwd, user.passwd)
                .then(doMatch => {
                    if (doMatch){
                        req.session.isLoggedIn = true;
                        req.session.user = user;
                        req.session.usuario = user.usuario;
                        return req.session.save(err => {
                            res.redirect('/');
                        });
                    }
                    res.redirect('/users/login');
                }).catch(err => {
                    res.redirect('/users/login');
                });
        }).catch(err => {
            console.log(err);
        });
};

exports.logout =  (req, res, next) => {
    req.session.destroy(() => {
        res.redirect('/'); //Este código se ejecuta cuando la sesión se elimina.
    });
};

exports.get_signup =  (req, res, next) => {
    const usuario = req.session.usuario ? req.session.usuario : '';
    res.render('signup', {
       usuario : usuario
    })
};


exports.post_signup =  (req, res, next) => {
    const nuevo_Usuario = new User(req.body.nombre, req.body.usuario, req.body.passwd);
    nuevo_Usuario.save()
        .then( () => {
            res.redirect('/users/login');
        }).catch((err) => {
            console.log(err);
        })
};
