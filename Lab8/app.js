//Problema 1
const promedio = (arreglo) => {
    let sum = 0
    arreglo.forEach(element => {
        sum += element
    });
    
    return sum / arreglo.length
}
console.log(promedio([1,2,3,4]))

//Problema 2

const palabra = (cadena) => {
    const filesystem = require('fs')
    filesystem.writeFileSync('string.txt', cadena)
}

palabra("Ejemplo de string 1")

// Problema 3 (Problema resuelto en otro lenguaje)
// Consiste en crear una función que que reciba un arreglo de numeros y un objetivo de suma,
//la función debe devolver los dos números del arreglo cuya suma es igual al objetivo
const twoNumberSum = (array, targetSum) => {
    array.sort((a,b)=>a-b) 
      var i = 0
      var j = array.length - 1
      while(i < j ){
          sum_ = array[i] + array[j]
          if(sum_ < targetSum){
              i++	
          }
          else if(sum_ > targetSum){
              j--
          }
          else{
              return [array[i], array[j]]
          }
      }
      return []
  }

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10))

// Petición al servidor que devuelve laboratorio 1
const http = require('http')
const fs = require('fs').promises;

const server = http.createServer((req, res) => {
    fs.readFile("../Lab1/index.html")
    .then(contents => {
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.end(contents);
    })
    .catch(err => {
        res.writeHead(500);
        res.end(err);
        return;
    });
})


server.listen(3000)






//Notas de clase
//fs: filesystem
// const filesystem = require('fs')

// filesystem.writeFileSync('hola.txt', 'Hola desde node')

// const arreglo = [5000, 60, 90, 100, 10, 20, 0 , 120, 2000, 340, 1000, 50]

// for(let item of arreglo){
//     setTimeout(() => {
//         console.log(item)
//     }, item)
// }

// const http = require('http')

// const server = http.createServer((request, response) => {
//     console.log(request)
//     response.setHeader('Content-type', 'text/html')
//     response.write("hola")
//     response.end()
// })


// server.listen(3000)