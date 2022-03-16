const db = require('../utils/database');
const bcrypt = require('bcryptjs');
// const usuarios = [];

module.exports = class User {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_nombre, nuevo_usuario, nuevo_passwd) {
        this.nombre = nuevo_nombre;
        this.usuario = nuevo_usuario;
        this.passwd = nuevo_passwd;
        
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return bcrypt.hash(this.passwd, 12)
            .then((password_cifrado) => {
                return db.execute('INSERT INTO Usuario (nombre, usuario, passwd) VALUES (?, ?, ?)', 
                [this.nombre, this.usuario, password_cifrado]);
            }).catch((err) => {
                console.log(err)
            });
    }

    static fetchAll() {
        return db.execute('SELECT * FROM Usuario');
    }
    
    static findOne(usuario){
        return db.execute('SELECT * FROM Usuario WHERE usuario = ?', [usuario]);
    }
    
}