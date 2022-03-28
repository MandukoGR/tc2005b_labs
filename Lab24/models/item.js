
const db = require('../utils/database');
const items = 
    [
        {
          "precio": 250,
          "id": 1,
          "title": "Camisa",
          "thumbnailUrl": "https://m.media-amazon.com/images/I/71U1fmkbiBL._AC_UX342_.jpg"
        },
        {
          "precio": 3000,
          "id": 2,
          "title": "Tenis Adidas",
          "thumbnailUrl": "data:image/jpeg;base64,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"
        },
        {
          "precio": 5000,
          "id": 3,
          "title": "Smart watch",
          "thumbnailUrl": "https://m.media-amazon.com/images/I/61TzjMeU3mS._AC_SX522_.jpg"
        },
        {
          "precio": 1500,
          "id": 5,
          "title": "Teclado",
          "thumbnailUrl": "https://www.steren.com.mx/media/catalog/product/cache/532829604b379f478db69368d14615cd/c/o/com-624_x1_9.jpg"
        }
    ];

module.exports = class Item {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_precio, nuevo_id, nuevo_title, nuevo_thumbnailUrl) {
        this.precio = nuevo_precio;
        this.id = nuevo_id;
        this.title = nuevo_title;
        this.thumbnailUrl = nuevo_thumbnailUrl;
    }

    // //Este método servirá para guardar de manera persistente el nuevo objeto. 
    // save() {
    //     items.push(this);
    //     console.log(items);
    // }
       //Este método servirá para guardar de manera persistente el nuevo objeto. 
      save() {
        return db.execute('INSERT INTO Item (precio, id, title, thumbnailUrl) VALUES (?, ?, ?,?)', 
            [this.precio, this.id, this.title, this.thumbnailUrl]);
      }

    // //Este método servirá para devolver los objetos del almacenamiento persistente.
    // static fetchAll() {
    //     return items;
    // }
      //Este método servirá para devolver los objetos del almacenamiento persistente.
      static fetchAll() {
        return db.execute('SELECT * FROM Item');
      }
    

}





