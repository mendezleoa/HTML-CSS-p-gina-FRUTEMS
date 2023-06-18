const mysql = require('mysql2');

let conexion = mysql.createConnection({
  host: '127.0.0.1',
  port: '3306',
  database: 'datos_registro',
  user: 'root',
  password: '',
});

conexion.connect(function(error) {
  if (error) {
    console.log("Ocurrió un error", error)
  } else {
    console.log("Conectado");
  }
});

module.exports = conexion;