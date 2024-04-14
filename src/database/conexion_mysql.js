const mysql = require('mysql');

let connection = mysql.createConnection({
  host: 'localhost',  // Cambia esto por el host de tu base de datos
  user: 'root',    // Cambia esto por el nombre de usuario de tu base de datos
  password: 'gal22v10', // Cambia esto por la contraseÃ±a de tu base de datos
  database: 'bd_bartender_comida' // Cambia esto por el nombre de tu base de datos
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return false;
  }
  console.log('Conexión exitosa a la base de datos MySQL');
  return true;
});

function cerraConexion() {
  connection.end((err) => {
    if (err) {
      console.error('Error al cerrar la conexión:', err);
      return false;
    }
    console.log('Conexión cerrada exitosamente');
    return true;
  });
};

module.exports = connection;