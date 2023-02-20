const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/crudmernstack');

const objetobd = mongoose.connection

objetobd.on('connected', () =>{
    console.log('Conexión correcta a MongoDB')
})

objetobd.on('error', () =>{
    console.log('Error de conexion')
})

module.exports = mongoose