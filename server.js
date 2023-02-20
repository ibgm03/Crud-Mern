const express = require('express');
const app = express()

const archivoBD = require('./conexion')

app.get('/', (req, res) => {
    res.end('Bienvenidos al servidor backend Node.js. Corriendo...<')
})

//configurar server basico
app.listen(5000, function () {
    console.log("El servidor NODE esta corriendo correctamente")
})