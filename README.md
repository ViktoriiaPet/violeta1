## crear un proyecto

### npm init

## instalar nuestro Framework Express

### npm i express

## crear un servidor api sencillo

//cuando requerimos un paquete de node modules, es traernos una clase que al instanciarla nos permite usar sus metodos propiedades

const express = require('express') //requerimos el paquete express
const app = express()//instanciamos la clase express para poder usar el metodo objeto app
const port = 3000

//rutas
//definimos la ruta "/" que mediante el metodo "get" responde con un text plano "hello world"
app.get('/', (req, res) => {
res.send('Hello World!')
})

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})

## arrancar el servidor

### $ node --watch api
