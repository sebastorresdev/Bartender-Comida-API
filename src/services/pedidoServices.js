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

function obtenerChefDisponibles(callback) {
  const query = 'CALL usp_obtenerChefDisponibles()';
  connection.query(query, (err, res) => {
    if (err) {
      console.log("Hubo un error al hacer la query: obtenerChefDisponibles ");
      return callback(err);
    }
    // Convertir el campo de estado de Buffer a booleano
    res[0].forEach(chef => {
      chef.estado = Boolean(chef.estado && chef.estado[0]);
    });
    return callback(null, res);
  })
}

function validarLogin(body, callback) {
  const query = 'CALL usp_validarLogin(?, ?, @resultado)';
  
  connection.query(query, [body.usuario, body.contrasenia], (err, res) => {
    if (err) {
      console.log("Hubo un error al hacer la query: obtenerPedidosPorEstado ");
      return callback(err);
    }
    
    // Obtener el valor del parámetro de salida
    connection.query('SELECT @resultado AS resultado', (err, result) => {
      if (err) {
        console.log("Hubo un error al obtener el resultado del procedimiento almacenado");
        return callback(err);
      }
      
      const resultado = result[0].resultado;
      // Aquí puedes hacer algo con el resultado, como pasar el resultado a través del callback
      return callback(null, res, resultado);
    });
  });
};

module.exports = { obtenerPedidosPorEstado, obtenerTodosLosPedidos,obtenerChefDisponibles, validarLogin };