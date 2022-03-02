const http = require('http');
const fs = require('fs');
const url = require('url');

// Archivos a utilizar
const lab6 = fs.readFileSync('./public/index.html');
const tiendita = fs.readFileSync('./public/tiendita.html');
const validacion = fs.readFileSync('./public/validacion.html');
const preguntas = fs.readFileSync('./public/preguntas.html');

// Servidor
const server = http.createServer();

//Función para almacenar nombre en archivo de texto
const texto = (nombre) => {
    const filesystem = require('fs')
    filesystem.writeFileSync('usuario.txt', nombre)
};

server.on('request', (req, res) => {
    console.log(req.method, req.url);
    const { pathname } = url.parse(req.url, false);

    //Respuestas
    switch (pathname) {
        case '/':
            if (req.method == 'GET') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('Hola, por favor ingresa tu nombre')
            res.end(lab6);
            break;
            } else if(req.method === 'POST'){
                const datos = [];
                req.on('data', (dato) => {
                    console.log('Bienvenido ' + dato);
                    datos.push(dato);
                    
                });
                return req.on('end', () =>{
                    const datos_completos = Buffer.concat(datos).toString()
                    console.log(datos_completos)
                    const nuevo_dato = datos_completos.split('=')[1]
                    console.log(nuevo_dato)
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write('Bienvenido '  + nuevo_dato + ', tu nombre ha sido guardado');
                    texto(nuevo_dato);
                    return res.end(lab6);
                })

            }

        case '/tiendita.html':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(tiendita);
            break;
        
        case '/appTiendita.js':
            fs.createReadStream('./public/appTiendita.js').pipe(res);
            break;

        case '/api.json':
            fs.createReadStream('./public/api.json').pipe(res);
            break;
            
        case '/validacion.html':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(validacion);
            break;

        case '/appValidacion.js':
            fs.createReadStream('./public/appValidacion.js').pipe(res);
            break; 

        case '/preguntas.html':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(preguntas);
            break;
        default:
            res.writeHead(404, { 'content-type': 'text/html' });
            res.end('ERROR: 404, La ruta no ha sido encontrada');
    }
    

});

server.listen(3000, 'localhost', () => {
    console.log('Server waiting for request');
});