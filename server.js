const express = require('express');
const app = express()

const archivoBD = require('./conexion')

// importacion del archivo de rutas y modelo usuario
const rutausuario = require('./rutas/usuario')

// prueba
app.use('/api/usuario', rutausuario)

//importar body parser para obtener de los usuarios campos de informacion
const bodyparser = require('body-parser')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:'true'}))


app.get('/', (req, res) => {
    res.end('Bienvenidos al servidor backend Node.js. Corriendo...<')
})

//configurar server basico
app.listen(5000, function () {
    console.log("El servidor NODE esta corriendo correctamente")
})