const { obtenerPedidosPorEstado, obtenerTodosLosPedidos } = require('../services/pedidoServices')

function obtenerPedidosPorEstadoController(req, res) {
    const param = req.body.estado;
    console.log(`el parametro pasado es: ${param}`);
    obtenerPedidosPorEstado(param, (err, resultados) => {
        if (err) {
            console.error('Error al ejecutar el procedimiento:', err);
            return res.status(500).json({ error: 'Error al ejecutar el procedimiento' });
        }
        res.status(200).json(resultados);
    })
};

function obtenerTodosLosPedidosController(req, res) {
    obtenerTodosLosPedidos((err, resultados) => {
        if (err) {
            console.error('Error al ejecutar el procedimiento:', err);
            return res.status(500).json({ error: 'Error al ejecutar el procedimiento' });
        }
        res.status(200).json(resultados[0]);
    })
};

module.exports = { obtenerPedidosPorEstadoController, obtenerTodosLosPedidosController }