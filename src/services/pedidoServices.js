let connection = require('../database/conexion_mysql')

function obtenerPedidosPorEstado(estado, callback) {
  const query = 'CALL usp_obtenerPedidosPorEstado(?)';
  connection.query(query, estado, (err, res) => {
    if (err) {
      console.log("Hubo un error al hacer la query: obtenerPedidosPorEstado ");
      // connection.release();
      return callback(err);
    }
    return callback(null, res);
  })
};

function obtenerTodosLosPedidos(callback) {
  const query = 'CALL usp_obtenerTodosLosPedidos()';
  connection.query(query, (err, res) => {
    if (err) {
      console.log("Hubo un error al hacer la query: obtenerTodosLosPedidos ");
      return callback(err);
    }
    return callback(null, res);
  })
};

module.exports = { obtenerPedidosPorEstado, obtenerTodosLosPedidos };